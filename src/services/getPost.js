const { PostCategory, BlogPost, User, Category } = require('../database/models');

const getPost = async () => {
    const posts = PostCategory.findAll({
        include: [
            { model: BlogPost, as: 'blogPost', through: { attributes: [] } },
        ],
    });

    // const posts = BlogPost.findAll({
    //     include: [
    //         { model: User, as: 'user', attributes: { exclude: 'password' } },
    //     ],
    // });

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