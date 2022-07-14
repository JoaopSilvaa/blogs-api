const { create, verify } = require('../services/createPost');

module.exports = async (req, res, next) => {
    const { title, content, categoryIds } = req.body;

    const userId = await verify(req.user);
    const post = await create({ title, content, userId, categoryIds });

    if (post.error) return next(post.error);

    return res.status(201).json(post);
};