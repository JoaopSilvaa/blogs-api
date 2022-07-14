const { PostCategory, BlogPost, Category } = require('../database/models');

const getPostById = async (id) => {
    const user = await PostCategory.findOne({ 
        where: { id },
        include: [
            { model: BlogPost, as: 'blogPost', through: { attributes: [] } },
            { model: BlogPost, as: 'blogPost', through: { attributes: [] } },
        ],  
    });

    if (!user) {
        return {
            error: {
                code: 'notFound',
                message: 'User does not exist',
            },
        };
    }
    return user;
};

module.exports = {
    getUserById,
};
