const { Category } = require('../database/models');

const validateName = (name) => {
    if (!name) {
        return {
            error: {
                code: 'badRequest',
                message: '"name" is required',
            },
        };
    }
};

const create = async ({ name }) => {
    const validName = validateName(name);

    if (validName) return validName;
    
    const category = await Category.create({ name });
    
    console.log(category);
    return { id: category.dataValues.id, name: category.name };
};

module.exports = {
    create,
};
