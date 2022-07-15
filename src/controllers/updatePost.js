const { update, verify } = require('../services/updatePost');
const { getPostById } = require('../services/getPostById');

module.exports = async (req, res, next) => {
    const { title, content } = req.body;
    const { id } = req.params;

    const userId = await verify(req.user);
    const post = await update({ id, title, content, userId });

    if (post.error) return next(post.error);

    const postUpdated = await getPostById(id);
    return res.status(201).json(postUpdated);
};