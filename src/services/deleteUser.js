const { User } = require('../database/models');

const verify = async (email) => {
    const user = await User.findOne({ where: { email } });
    return user.id;
};

const remove = async ({ id }) => {
    await User.destroy({ where: { id } }); 
    
    return true;
};

module.exports = {
    remove,
    verify,
};