import { Router } from "express";
const router = Router();

// ℹ️ Test Route. Can be left and used for waking up the server if idle
router.get("/", (_req, res, _next) => {
  res.json("All good in here");
});

router.get("/debug-sentry", (_req, _res) => {
  throw new Error("My first Sentry error!");
});

export default router;
