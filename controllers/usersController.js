const jwt = require('jsonwebtoken');
const { CREATED, OK } = require('../schemas/validations');

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

const login = async (req, res) => {
    const userLogin = req.body;
    const usersLogin = await usersServices.login(userLogin);
    if (usersLogin.message) {
        return res.status(usersLogin.code)
        .json({ message: usersLogin.message }); 
}
    const token = jwt.sign({ data: userLogin }, 'JWT_kEY', jwtConfig);
    res.status(OK).json({ token });
};

module.exports = {
    create,
    login,
};
