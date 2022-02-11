const validationsSchema = require('../schemas/validations');

const validateUser = (req, res, next) => {
    const { displayName, email, password } = req.body;

    const validationsName = validationsSchema.validateName(displayName);
    if (validationsName.message) {
        return res.status(validationsName.code).json({
            message: validationsName.message });
    }

    const validationsEmail = validationsSchema.validateEmail(email);
    if (validationsEmail.message) {
        return res.status(validationsEmail.code).json({
            message: validationsEmail.message });
    }

    const validationsPassword = validationsSchema.validatePassword(password);
    if (validationsPassword.message) {
        return res.status(validationsPassword.code).json({
            message: validationsPassword.message });
    }

    next();
};

const validateUserLogin = (req, res, next) => {
    const { email, password } = req.body;
    const validationsEmailLogin = validationsSchema.validateEmailLogin(email);
    if (validationsEmailLogin.message) {
        return res.status(validationsEmailLogin.code).json({
            message: validationsEmailLogin.message });
    }

    const validationsPasswordLogin = validationsSchema.validatePasswordLogin(password);
    if (validationsPasswordLogin.message) {
        return res.status(validationsPasswordLogin.code).json({
            message: validationsPasswordLogin.message });
    }

    next();
};

const validateCategoriesName = (req, res, next) => {
    const { name } = req.body;
    const validationsCategories = validationsSchema.validateCategories(name);
    if (validationsCategories.message) {
        return res.status(validationsCategories.code).json({
            message: validationsCategories.message });
    }

    next();
};

module.exports = {
    validateUser,
    validateUserLogin,
    validateCategoriesName,
};