const { login } = require('../services/loginService');

module.exports = async (req, res, next) => {
    const { email, password } = req.body;
    
    const token = await login({ email, password });

    if (token.error) return next(token.error);

    return res.status(200).json({ token });
};
