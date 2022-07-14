const { PostCategory, BlogPost, Category, User } = require('../database/models');

const getPostById = async (id) => {
    const post = await PostCategory.findOne({ 
        where: { postId: id },
        include: [
            { model: BlogPost, 
                as: 'blogPost',
                through: { attributes: [],
                include: [{ model: User, as: 'user', attributes: { exclude: 'password' } }] } },
            { model: Category, as: 'categories', through: { attributes: [] } },
        ],
    });
    if (!post) {
        return {
            error: { code: 'notFound', message: 'Post does not exist' },
        };
    }
    return post;
};

module.exports = {
    getPostById,
};
