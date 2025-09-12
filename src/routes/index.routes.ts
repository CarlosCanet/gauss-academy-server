import { Router } from "express";
import authRouter from "./auth.routes.js";
import userRouter from "./user.routes.js";
import courseRouter from "./course.routes.js";
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

export default router;
