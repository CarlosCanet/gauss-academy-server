import { Router } from "express";
import authRouter from "./auth.routes.js";
import userRouter from "./user.routes.js";
import courseRouter from "./course.routes.js";
import classRouter from "./class.routes.js";
import enrollmentRouter from "./enrollment.routes.js";
import uploadRouter from "./upload.routes.js";
import paymentRouter from "./payment.routes.js";
const router = Router();

// ℹ️ Test Route. Can be left and used for waking up the server if idle
router.get("/", (_req, res, _next) => {
  res.json("All good in here");
});

router.get("/debug-sentry", (_req, _res) => {
  throw new Error("My first Sentry error!");
});

// Middlewares
router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/course", courseRouter);
router.use("/class", classRouter);
router.use("/enrollment", enrollmentRouter);
router.use("/upload", uploadRouter);
router.use("/payment", paymentRouter);

export default router;
