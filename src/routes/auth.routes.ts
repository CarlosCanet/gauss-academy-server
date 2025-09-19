import { Router, type Request, type Response, type NextFunction } from "express";
import User from "../models/User.model.js";
import bcrypt from "bcryptjs";
import type { AuthenticatedRequest, GaussJwtPayload } from "../types.js";
import jwt from "jsonwebtoken";
import { validateToken } from "../middlewares/auth.middlewares.js";
const authRouter = Router();

// POST /api/auth/signup
authRouter.post("/signup", async (req: Request, res: Response, next: NextFunction) => {
  const { firstName, lastName, dateOfBirth, email, password, dni, mobileNumber, profileImageUrl } = req.body;
  try {
    await User.create({ firstName, lastName, dateOfBirth, email, password, dni, mobileNumber, profileImageUrl });
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    if (error && typeof error === "object" && "name" in error && error.name === "ValidationError" && "errors" in error && typeof error.errors === "object" && error.errors) {
      return res.status(400).json(error.errors);
    }
    next(error);
  }
});

// POST /api/auth/login
authRouter.post("/login", async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  try {
    if (!process.env.TOKEN_SECRET_KEY) {
      console.log("Missing token key for jwt")
      return res.status(500).json({errorMessage: "Internal server error. Please contact us."})
    }

    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      return res.status(400).json({ errorMessage: "User not found" });
    }
    const isPasswordCorrect = await bcrypt.compare(password, foundUser.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ errorMessage: "Incorrect password" });
    }

    const payload: GaussJwtPayload = { userId: foundUser._id, email: foundUser.email, firstName: foundUser.firstName, role: foundUser.role };
    const authToken = jwt.sign(payload, process.env.TOKEN_SECRET_KEY, { algorithm: "HS256", expiresIn: "90d" });
    res.status(202).json({ authToken });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// GET /api/auth/verify
authRouter.get("/verify", validateToken, (req: AuthenticatedRequest, res: Response) => {
  res.status(200).json(req.payload);
});

export default authRouter;
