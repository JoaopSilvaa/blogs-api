const { BlogPost, Category, User } = require('../database/models');

const getPostById = async (id) => {
    const post = await BlogPost.findOne({ 
        where: { id },
        include: [
            { model: User, as: 'user', attributes: { exclude: 'password' } },
            { model: Category, as: 'categories', through: { attributes: [] } },
        ] });
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
