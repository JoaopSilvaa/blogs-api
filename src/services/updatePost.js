const { BlogPost, User } = require('../database/models');

const verify = async (email) => {
    const user = await User.findOne({ where: { email } });
    return user.id;
};

const update = async ({ id, title, content, userId }) => {
    const post = await BlogPost.findByPk(id);
    if (!post) {
        return { error: { code: 'notFound', message: 'Post does not exist' } };
    }

    if (userId !== post.userId) {
        return {
            error: { code: 'unauthorized', message: 'Unauthorized user' },
        };
    }
    
    if (!title || !content) {
        return {
            error: { code: 'badRequest', message: 'Some required fields are missing' },
        };
    }
    const postUpdated = await BlogPost.upsert({ id, title, content, userId });
    return postUpdated;     
};

module.exports = {
    update,
    verify,
};