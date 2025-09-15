import type { Request } from "express";
import type { Types } from "mongoose";

// Define el tipo de tu payload según tu JWT
export interface GaussJwtPayload {
  userId: Types.ObjectId;
  email: string;
  firstName: string;
  role: "Student" | "Teacher" | "Staff" | "Admin";
}

// Extiende el tipo Request para incluir 'payload'
export interface AuthenticatedRequest extends Request {
  payload?: GaussJwtPayload;
}
