const OK = 200;
const CREATED = 201;
const BAD_REQUEST = 400;
const NOT_FOUND = 404;
const CONFLICT = 409;
const UNAUTHORIZED = 401;

const displayNameLength = '"displayName" length must be at least 8 characters long';
const emailInvalid = '"email" must be a valid email';
const emailRequired = '"email" is required';
const emailEmpty = '"email" is not allowed to be empty';
const passwordEmpty = '"password" is not allowed to be empty';
const passwordLength = '"password" length must be 6 characters long';
const passwordRequired = '"password" is required';
const userExist = 'User already registered';
const userNotExist = 'Invalid fields';
const TokenNotFound = 'Token not found';
const InvalidToken = 'Expired or invalid token';
const idNotExist = 'User does not exist';
const nameRequired = '"name" is required';

const validateName = (name) => {
    if (name.length < 8) {
        return { code: BAD_REQUEST, message: displayNameLength };
    }
    return {};
};

const validateEmail = (email) => {
    if (!email) return { code: BAD_REQUEST, message: emailRequired };
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
    if (!emailRegex) return { code: BAD_REQUEST, message: emailInvalid };

    return {};
};

const validatePassword = (password) => {
    if (!password) return { code: BAD_REQUEST, message: passwordRequired };
    if (password.length < 6) {
        return { code: BAD_REQUEST, message: passwordLength };
    }
    return {};
};

const validateEmailLogin = (email) => {
    if (email === '') return { code: BAD_REQUEST, message: emailEmpty };
    if (!email) return { code: BAD_REQUEST, message: emailRequired };
    
    return {};
};

const validatePasswordLogin = (password) => {
    if (password === '') return { code: BAD_REQUEST, message: passwordEmpty };
    if (!password) return { code: BAD_REQUEST, message: passwordRequired };

    return {};
};

const validateCategories = (name) => {
    if (!name) return { code: BAD_REQUEST, message: nameRequired };

    return {};
};

module.exports = {
    validateName,
    validateEmail,
    validatePassword,
    validateEmailLogin,
    validatePasswordLogin,
    validateCategories,
    CONFLICT,
    OK,
    CREATED,
    userExist,
    NOT_FOUND,
    BAD_REQUEST,
    userNotExist,
    UNAUTHORIZED,
    TokenNotFound,
    InvalidToken,
    idNotExist,
    nameRequired,
};