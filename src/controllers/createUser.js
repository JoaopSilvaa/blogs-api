const { create } = require('../services/createUser');

module.exports = async (req, res, next) => {
    const { displayName, email, password, image } = req.body;

    const token = await create({ displayName, email, password, image });

    if (token.error) return next(token.error);

    return res.status(201).json({ token });
};
