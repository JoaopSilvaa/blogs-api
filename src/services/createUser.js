const jwt = require('jsonwebtoken');

const { User } = require('../database/models');

const { JWT_SECRET } = process.env;

const validateName = (displayName) => {
    if (displayName.length < 8) {
        return {
            error: {
                code: 'badRequest',
                message: '"displayName" length must be at least 8 characters long',
            },
        };
    }
};

const validateEmail = (email) => {
    const testEmail = /\S+@\S+\.\S+/;
    if (!testEmail.test(email)) {
        return {
            error: {
                code: 'badRequest',
                message: '"email" must be a valid email',
            },
        };
    }
};

const emailExists = async (email) => {
    const alreadyEmail = await User.findOne({ where: { email } });
    if (alreadyEmail) {
        return {
            error: {
                code: 'conflict',
                message: 'User already registered',
            },
        };
    }
};

const validatePassword = (password) => {
    if (password.length < 6) {
        return {
            error: {
                code: 'badRequest',
                message: '"password" length must be at least 6 characters long',
            },
        };
    }
};

const doToken = (displayName, email, image) => {
    const jwtConfig = { algorithm: 'HS256' };
    const token = jwt.sign({ displayName, email, image }, JWT_SECRET, jwtConfig);
    return token;
};

const create = async ({ displayName, email, password, image }) => {
    const validName = validateName(displayName);
    const validEmail = validateEmail(email);
    const validPass = validatePassword(password);
    const emailExist = await emailExists(email);

    if (validName) return validName;
    if (validEmail) return validEmail;
    if (validPass) return validPass;
    if (emailExist) return emailExist;
    
    await User.create({ displayName, email, password, image });

    const token = doToken(displayName, email, image);
    
    return token;
};

module.exports = {
    create,
};
