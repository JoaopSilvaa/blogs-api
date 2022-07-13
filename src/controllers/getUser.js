const { getUser } = require('../services/getUser');

module.exports = async (_req, res, next) => {
    const users = await getUser();

    if (users.error) return next(users.error);

    return res.status(200).json(users);
};