const { PostCategory } = require('../database/models');

const getPost = async () => {
    const posts = await PostCategory.findAll();
    if (!posts) {
        return {
            error: {
                code: 'notFound',
                message: 'Posts not Found',
            },
        };
    }
    return posts;
};

module.exports = {
    getPost,
};
