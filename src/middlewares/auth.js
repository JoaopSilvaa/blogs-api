const jwt = require('jsonwebtoken');

const { User } = require('../database/models');

const { JWT_SECRET } = process.env;

module.exports = async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Token not found' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        const { email } = decoded;
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(401).json({ message: 'Expired or invalid token' });
        }

        next();
    } catch (err) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};
