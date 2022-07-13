const { create } = require('../services/createCategory');

module.exports = async (req, res, next) => {
    const { name } = req.body;

    const category = await create({ name });

    if (category.error) return next(category.error);

    return res.status(201).json(category);
};