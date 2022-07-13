const { Category } = require('../database/models');

const getCategory = async () => {
    const categories = Category.findAll({ attributes: { exclude: 'password' } });

    if (!categories) {
        return {
            error: {
                code: 'notFound',
                message: 'Categories not Found',
            },
        };
    }
    return categories;
};

module.exports = {
    getCategory,
};
