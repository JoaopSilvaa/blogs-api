const { findPostByTerm } = require('../services/findPostByTerm');

module.exports = async (req, res) => {
    const { q } = req.query;
    
    const term = `%${q}%`;
    const posts = await findPostByTerm(term);

    return res.status(200).json(posts);
};