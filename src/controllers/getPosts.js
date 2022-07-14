const { getPost } = require('../services/getPost');

module.exports = async (_req, res, next) => {
    const posts = await getPost();

    if (posts.error) return next(posts.error);

    return res.status(200).json(posts);
};