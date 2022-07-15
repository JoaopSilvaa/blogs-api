const { Op } = require('sequelize');
const { BlogPost, User, PostCategory } = require('../database/models');

const findPostByTerm = async (term) => {
    const postByTitle = await BlogPost.findAll({
        where: { title: { [Op.like]: term } },
        include: [
            { model: User, as: 'user', attributes: { exclude: 'password' } },
            { model: PostCategory, through: { attributes: [] } }],
    });
    console.log(postByTitle);
    if (postByTitle.length === 0) {
        const postByContent = await BlogPost.findAll({
            where: { content: { [Op.like]: term } },
            include: [{ model: User, as: 'user', attributes: { exclude: 'password' } }],
        });
        console.log(postByContent);
        if (postByContent.length === 0) return [];
        return postByContent;
    }
    return postByTitle;
};

module.exports = {
    findPostByTerm,
};
