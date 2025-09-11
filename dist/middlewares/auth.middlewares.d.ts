import type { Response, NextFunction } from "express";
import type { AuthenticatedRequest } from "../types.js";
export declare function validateToken(req: AuthenticatedRequest, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=auth.middlewares.d.ts.map