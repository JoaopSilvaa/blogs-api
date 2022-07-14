const { BlogPost, User } = require('../database/models');
const { getPostById } = require('./getPostById');

const verify = async (email) => {
    const user = await User.findOne({ where: { email } });
    return user.id;
};

const update = async ({ id, title, content, userId }) => {
    const post = await getPostById(id);
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
    const postUpdated = await BlogPost.upsert({ title, content });
    return postUpdated;     
};

module.exports = {
    update,
    verify,
};