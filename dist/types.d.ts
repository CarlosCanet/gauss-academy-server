import type { Request } from "express";
export interface JwtPayload {
    userId: string;
}
export interface AuthenticatedRequest extends Request {
    payload?: JwtPayload;
}
//# sourceMappingURL=types.d.ts.map