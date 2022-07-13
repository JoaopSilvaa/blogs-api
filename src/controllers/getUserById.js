const { getUserById } = require('../services/getUserById');

module.exports = async (req, res, next) => {
    const { id } = req.params;

    const user = await getUserById(id);

    if (user.error) return next(user.error);

    return res.status(200).json(user);
};