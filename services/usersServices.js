const { User } = require('../models');
const { CONFLICT, userExist } = require('../schemas/validations');

const create = async (user) => {
    const existEmail = await User.findOne({ where: { email: user.email } });
    if (existEmail) return { code: CONFLICT, message: userExist };
    
    return User.create(user);
};

module.exports = {
    create,
};