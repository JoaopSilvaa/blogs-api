const { remove, verify } = require('../services/deletePostById');

module.exports = async (req, res, next) => {
    const { id } = req.params;

    const userId = await verify(req.user);
    const post = await remove({ id, userId });

    if (post.error) return next(post.error);

    return res.status(204).send();
};