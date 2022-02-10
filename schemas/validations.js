const OK = 200;
const CREATED = 201;
const BAD_REQUEST = 400;
const NOT_FOUND = 404;
const CONFLICT = 409;

const displayNameLength = '"displayName" length must be at least 8 characters long';
const emailInvalid = '"email" must be a valid email';
const emailBlank = '"email" is required';
const passwordLength = '"password" length must be 6 characters long';
const passwordBlank = '"password" is required';
const userExist = 'User already registered';

const validateName = (name) => {
    if (name.length < 8) {
        return { code: BAD_REQUEST, message: displayNameLength };
    }
    return {};
};

const validateEmail = (email) => {
    if (!email) return { code: BAD_REQUEST, message: emailBlank };
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
    if (!emailRegex) return { code: BAD_REQUEST, message: emailInvalid };

    return {};
};

const validatePassword = (password) => {
    if (!password) return { code: BAD_REQUEST, message: passwordBlank };
    if (password.length < 6) {
        return { code: BAD_REQUEST, message: passwordLength };
    }
    return {};
};

module.exports = {
    validateName,
    validateEmail,
    validatePassword,
    CONFLICT,
    OK,
    CREATED,
    userExist,
    NOT_FOUND,
};