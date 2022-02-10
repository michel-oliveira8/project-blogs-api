const jwt = require('jsonwebtoken');
const { CREATED } = require('../schemas/validations');

const usersServices = require('../services/usersServices');

const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

const create = async (req, res) => {
    const user = req.body;
    const users = await usersServices.create(user);
    if (users.message) return res.status(users.code).json({ message: users.message });
    const token = jwt.sign({ data: user }, 'JWT_kEY', jwtConfig);
    res.status(CREATED).json({ token });
};

module.exports = {
    create,
};
