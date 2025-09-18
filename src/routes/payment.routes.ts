import express, { Router, type NextFunction, type Request, type Response } from "express";
const paymentRouter = Router();
import Stripe from "stripe";
import { validateToken } from "../middlewares/auth.middlewares.js";
import type { AuthenticatedRequest } from "../types.js";
import Payment from "../models/Payment.model.js";
import Enrollment from "../models/Enrollment.model.js";
import mongoose from "mongoose";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

// GET - /api/payment/enrollment/:enrollmentId - Get payment associated to an enrollment
paymentRouter.get("/enrollment/:enrollmentId", validateToken, async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const foundPayment = await Payment.findOne({ enrollment: req.params.enrollmentId }).populate({
      path: "enrollment",
      populate: { path: "course", select: "price" },
    });
    res.status(200).json(foundPayment);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// GET - /api/payment/myPayments - Get all my payments
// GET - /api/payment/myPayments?status=pending - Get all my pending payments
paymentRouter.get("/my-payments", validateToken, async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    if (!req.payload) {
      return res.status(400).json({ errorMessage: "Token payload missing" });
    }
    const userId = req.payload.userId;
    if (req.query.status) {
      const pendingPayments = await Payment.aggregate([
        {
          $lookup: {
            from: "enrollments",
            localField: "enrollment",
            foreignField: "_id",
            as: "enrollment",
          },
        },
        { $unwind: "$enrollment" },
        {
          $lookup: {
            from: "courses",
            localField: "enrollment.course",
            foreignField: "_id",
            as: "enrollment.course",
          },
        },
        {
          $unwind: "$enrollment.course",
        },
        { $match: { "enrollment.student": new mongoose.Types.ObjectId(userId), status: req.query.status } },
      ]);
      return res.status(200).json(pendingPayments);
    }
    const myPayments = await Payment.aggregate([
      {
        $lookup: {
          from: "enrollments",
          localField: "enrollment",
          foreignField: "_id",
          as: "enrollment",
        },
      },
      { $unwind: "$enrollment" },
      {
        $lookup: {
          from: "courses",
          localField: "enrollment.course",
          foreignField: "_id",
          as: "enrollment.course",
        },
      },
      {
        $unwind: "$enrollment.course",
      },
      { $match: { "enrollment.student": new mongoose.Types.ObjectId(userId) } },
    ]);
    console.log(myPayments);
    res.status(200).json(myPayments);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// POST - /api/payment/create-payment-intent - Create a payment intent
paymentRouter.post("/create-payment-intent", validateToken, async (req: Request, res: Response, next: NextFunction) => {
  const enrollmentId = req.body._id;
  console.log(enrollmentId);
  try {
    const enrollment = await Enrollment.findById(enrollmentId).populate("course", "price");
    if (!enrollment) {
      return res.status(404).json({ errorMessage: "Enrollment not found" });
    }
    const course = enrollment.course as unknown as { price: number };
    const coursePrice = course.price || 0;
    const discountPercent = enrollment.discountPercent || 0;
    const totalAmount = Math.max(0, (coursePrice * (100 - discountPercent)) / 100);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(totalAmount * 100),
      currency: "eur",
    });
    await Payment.create({
      enrollment: enrollmentId,
      status: "incomplete",
      paymentIntentId: paymentIntent.id,
      clientSecret: paymentIntent.client_secret,
      price: totalAmount,
    });
    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// PATCH - /api/payment/update-payment-intent - Update the payment intent by paying
paymentRouter.patch("/update-payment-intent", validateToken, async (req: Request, res: Response, next: NextFunction) => {
  const { clientSecret, paymentIntentId } = req.body;
  try {
    await Payment.findOneAndUpdate({ clientSecret, paymentIntentId }, { status: "succeeded" });
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// DELETE - /api/payment/cancel-payment-intent - Cancel the payment intent
paymentRouter.delete("/cancel-payment-intent", validateToken, async (req: Request, res: Response, next: NextFunction) => {
  const { clientSecret, paymentIntentId } = req.body;
  try {
    await stripe.paymentIntents.cancel(paymentIntentId);
    await Payment.findOneAndDelete({ clientSecret, paymentIntentId });
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    if (
      error &&
      typeof error === "object" &&
      "type" in error &&
      "code" in error &&
      error.type === "stripe.invalid_request_error" &&
      error.code === "payment_intent_unexpected_state"
    ) {
      return res.status(400).json({ error: "You cannot cancel a completed payment" });
    }
    next(error);
  }
});

// POST - /api/payment/webhook - Update payment info from stripe
paymentRouter.post("/webhook", express.raw({ type: "application/json" }), (req: Request, res: Response) => {
  const sig = req.headers["stripe-signature"];
  let event = null;
  if (!sig || Array.isArray(sig)) {
    return res.status(400).json({ errorMessage: "Missing or invalid stripe signature" });
  }

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET as string);
  } catch (error) {
    console.error(error);
    // invalid signature
    res.status(400).end();
    return;
  }

  let intent = null;
  switch (event["type"]) {
    case "payment_intent.succeeded":
      intent = event.data.object;
      console.log("Succeeded:", intent.id);
      break;
    case "payment_intent.payment_failed": {
      intent = event.data.object;
      const message = intent.last_payment_error && intent.last_payment_error.message;
      console.log("Failed:", intent.id, message);
      break;
    }
  }

  res.sendStatus(200);
});

export default paymentRouter;
