const { CREATED } = require('../schemas/validations');
const categoriesServices = require('../services/categoriesServices');

const createByName = async (req, res) => {
    const { name } = req.body;
    const getByName = await categoriesServices.create(name);
    console.log(getByName);

    return res.status(CREATED).json(getByName);
  };

  module.exports = {
      createByName,
  };