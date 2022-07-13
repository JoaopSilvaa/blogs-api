const { getCategory } = require('../services/getCategory');

module.exports = async (_req, res, next) => {
    const categories = await getCategory();

    if (categories.error) return next(categories.error);

    return res.status(200).json(categories);
};