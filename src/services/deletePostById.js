const { BlogPost, User } = require('../database/models');

const verify = async (email) => {
    const user = await User.findOne({ where: { email } });
    return user.id;
};

const remove = async ({ id, userId }) => {
    const post = await BlogPost.findByPk(id);
    if (!post) {
        return { error: { code: 'notFound', message: 'Post does not exist' } };
    }
    if (userId !== post.userId) {
        return {
            error: { code: 'unauthorized', message: 'Unauthorized user' },
        };
    }
    await BlogPost.destroy({ where: { id } }); 
    
    return true;
};

module.exports = {
    remove,
    verify,
};