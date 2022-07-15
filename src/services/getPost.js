const { PostCategory, BlogPost, User, Category } = require('../database/models');

const getPost = async () => {
    const posts = await PostCategory.findAll({
        include: [
            { model: BlogPost, 
                as: 'blogPost',
                through: { attributes: [],
                include: [{ model: User, as: 'user', attributes: { exclude: 'password' } }] } },
            { model: Category, as: 'categories', through: { attributes: [] } },
        ],
    });
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
