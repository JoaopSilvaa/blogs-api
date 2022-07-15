const { Op } = require('sequelize');
const { BlogPost, User, Category } = require('../database/models');

const findByTitle = async (term) => {
    const postByTitle = await BlogPost.findAll({
        where: { title: { [Op.like]: term } },
        include: [
            { model: User, as: 'user', attributes: { exclude: 'password' } },
            { model: Category, as: 'categories', through: { attributes: [] } },
        ] });
    return postByTitle;
};

const findPostByTerm = async (term) => {
    const postByTitle = await findByTitle(term);
    if (postByTitle.length === 0) {
        const postByContent = await BlogPost.findAll({
            where: { content: { [Op.like]: term } },
            include: [
                { model: User, as: 'user', attributes: { exclude: 'password' } },
                { model: Category, as: 'categories', through: { attributes: [] } },
            ] });
        if (postByContent.length === 0) return [];
        return postByContent;
    }
    return postByTitle;
};

module.exports = {
    findPostByTerm,
};
