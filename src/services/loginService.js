const jwt = require('jsonwebtoken');

const findOne = require('./findOneUser');

const { JWT_SECRET } = process.env;

const doToken = (email) => {
    const jwtConfig = { algorithm: 'HS256' };
    const token = jwt.sign({ email }, JWT_SECRET, jwtConfig);
    return token;
};

const login = async ({ email, password }) => {
    if (!email || !password) {
        return {
            error: {
                code: 'badRequest',
                message: 'Some required fields are missing',
            },
        }; 
    } 
    
    const user = await findOne(email, password);
    if (user.error) return user;

    const token = doToken(user);
    
    return token;
};

module.exports = {
    login,
};
