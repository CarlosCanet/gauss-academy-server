import jwt from "jsonwebtoken";
import type { Response, NextFunction } from "express";
import type { AuthenticatedRequest, JwtPayload } from "../types.js";

export function validateToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ errorMessage: "Authorization header missing" });
    }

    const tokenSplitted = authHeader.split(" ");
    if (tokenSplitted.length !== 2 || tokenSplitted[0] !== "Bearer") {
      return res.status(401).json({ errorMessage: "Invalid authorization format" });
    }

    const authToken = tokenSplitted[1];
    if (!authToken) {
      return res.status(401).json({ errorMessage: "Missing token" });
    }

    if (!process.env.TOKEN_SECRET_KEY) {
      console.log("You must define a TOKEN KEY");
      return res.status(500).json({ errorMessage: "There is a problem with the server. Please contact with us" });
    }

    const payload = jwt.verify(authToken, process.env.TOKEN_SECRET_KEY) as JwtPayload;
    req.payload = payload;
    next();
  } catch (error: unknown) {
    console.log(error);
    res.status(401).json({ errorMessage: "Token not send or is invalid" });
  }
}
