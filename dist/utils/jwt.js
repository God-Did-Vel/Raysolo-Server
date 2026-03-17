import jwt from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-luxury-hotel-key-change-me-in-production';
export const generateToken = (userId, role) => {
    return jwt.sign({ id: userId, role }, JWT_SECRET, {
        expiresIn: '30d',
    });
};
export const verifyToken = (token) => {
    try {
        return jwt.verify(token, JWT_SECRET);
    }
    catch (error) {
        return null;
    }
};
//# sourceMappingURL=jwt.js.map