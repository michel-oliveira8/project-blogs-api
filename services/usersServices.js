const { User } = require('../models');
const {
    CONFLICT,
    userExist,
    BAD_REQUEST,
    userNotExist,
    NOT_FOUND,
    idNotExist,
} = require('../schemas/validations');

const create = async (user) => {
    const existEmail = await User.findOne({ where: { email: user.email } });
    if (existEmail) {
 return { code: CONFLICT, message: userExist }; 
  }
    return User.create(user);
};

const login = async (user) => {
    const loginEmail = await User.findOne({ where: { email: user.email } });
    const loginPassword = await User.findOne({ where: { password: user.password } });
    if (!loginEmail || !loginPassword) {
        return { code: BAD_REQUEST, message: userNotExist };
    }
    return {};
};

const getAll = async (user) => {
    const allUsers = await User.findAll(user);

    return allUsers;
};

const getById = async (id) => {
    const getUserId = await User.findByPk(id);
    if (!getUserId) {
 return { code: NOT_FOUND, message: idNotExist }; 
  }
  return getUserId;
};

module.exports = {
    create,
    login,
    getAll,
    getById,
};