const { getPostById } = require('../services/getPostById');

module.exports = async (req, res, next) => {
    const { id } = req.params;

    const post = await getPostById(id);

    if (post.error) return next(post.error);

    return res.status(200).json(post);
};