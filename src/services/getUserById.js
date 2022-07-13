const { User } = require('../database/models');

const getUserById = async (id) => {
    const user = await User.findOne({ where: { id }, attributes: { exclude: 'password' } });

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
