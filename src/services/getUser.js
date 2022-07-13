const { User } = require('../database/models');

const getUser = async () => {
    const users = User.findAll({ attributes: { exclude: 'password' } });

    if (!users) {
        return {
            error: {
                code: 'notFound',
                message: 'Users not Found',
            },
        };
    }
    return users;
};

module.exports = {
    getUser,
};
