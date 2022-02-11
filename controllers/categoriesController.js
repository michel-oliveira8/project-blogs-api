const { CREATED, OK } = require('../schemas/validations');
const categoriesServices = require('../services/categoriesServices');

const createByName = async (req, res) => {
    const { name } = req.body;
    const getByName = await categoriesServices.create(name);

    return res.status(CREATED).json(getByName);
  };

  const getAllCategories = async (req, res) => {
      const getAll = await categoriesServices.getAllCategories();

      res.status(OK).json(getAll);
  };

  module.exports = {
      createByName,
      getAllCategories,
  };