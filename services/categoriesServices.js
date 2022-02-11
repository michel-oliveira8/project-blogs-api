const { Category } = require('../models');
const { BAD_REQUEST, nameRequired } = require('../schemas/validations');

const create = async (name) => {
    const createByName = await Category.create({ name });
    if (!createByName) {
 return { code: BAD_REQUEST, message: nameRequired }; 
  }
    return createByName;
};

const getAllCategories = async (user) => {
    const allUsers = await Category.findAll(user);

    return allUsers;
};

module.exports = {
    create,
    getAllCategories,
};