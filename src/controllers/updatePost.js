const { update, verify } = require('../services/updatePost');

module.exports = async (req, res, next) => {
    const { title, content } = req.body;
    const { id } = req.params;

    const userId = await verify(req.user);
    const post = await update({ id, title, content, userId });

    if (post.error) return next(post.error);

    return res.status(201).json(post);
};