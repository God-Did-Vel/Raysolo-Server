import { Request, Response, NextFunction } from 'express';
declare global {
    namespace Express {
        interface Request {
            admin?: any;
            user?: any;
        }
    }
}
export declare const protectAdmin: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const protectUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const optionalAuth: (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=authMiddleware.d.ts.map