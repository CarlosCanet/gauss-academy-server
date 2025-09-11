import type { Request } from "express";

// Define el tipo de tu payload según tu JWT
export interface JwtPayload {
  userId: string;
}

// Extiende el tipo Request para incluir 'payload'
export interface AuthenticatedRequest extends Request {
  payload?: JwtPayload;
}