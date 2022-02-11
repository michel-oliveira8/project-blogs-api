const { Category } = require('../models');
const { BAD_REQUEST, nameRequired } = require('../schemas/validations');

const create = async (name) => {
    const createByName = await Category.create({ name });
    console.log(createByName);
    if (!createByName) {
 return { code: BAD_REQUEST, message: nameRequired }; 
  }
    return createByName;
};

module.exports = {
    create,
};