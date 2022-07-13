const { User } = require('../database/models');

const findOne = async (email, password) => {
    const user = await User.findOne({ where: { email, password } });
        if (!user) {
            return {
                error: {
                    code: 'badRequest',
                    message: 'Invalid fields',
                },
            };
        }
    return user.email;
};
 
module.exports = findOne;