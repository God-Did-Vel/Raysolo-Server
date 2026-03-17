import jwt from 'jsonwebtoken';
const generateToken = (id, role) => {
    return jwt.sign({ id, role }, process.env.JWT_SECRET || 'hotel_management_super_secure_key_2026', {
        expiresIn: '7d',
    });
};
export default generateToken;
//# sourceMappingURL=generateToken.js.map