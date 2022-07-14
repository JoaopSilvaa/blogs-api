const { BlogPost, Category, PostCategory, User } = require('../database/models');

const exist = async (id) => {
    const category = await Category.findByPk(id);

    if (!category) {
        return false;
    }

    return true;
};

const validateCategoryId = async (categoryIds) => {
    const ids = await Promise.all(categoryIds.map((id) => exist(id)));
    const valid = ids.some((id) => id === false);
    if (valid) {
        return {
            error: {
                code: 'badRequest',
                message: '"categoryIds" not found',
            },
        };
    }
};

const verify = async (email) => {
    const user = await User.findOne({ where: { email } });
    return user.id;
};

const createPostCategory = async (postId, categoryIds) => {
    categoryIds.forEach(async (categoryId) => {
        await PostCategory.create({ postId, categoryId });
    });
};

const create = async ({ title, content, userId, categoryIds }) => {
    if (!title || !content || !categoryIds) {
        return {
            error: { code: 'badRequest', message: 'Some required fields are missing' },
        };
    }
    const validCategoryId = await validateCategoryId(categoryIds);
    if (validCategoryId) return validCategoryId; 
    const post = await BlogPost.create({ title, content, userId });
    await createPostCategory(post.dataValues.id, categoryIds);
    return {
        id: post.dataValues.id,
        title,
        content,
        userId,
        updated: post.dataValues.updated,
        published: post.dataValues.published,
    };
};

module.exports = {
    create,
    verify,
};