const jwt = require('jsonwebtoken');
const {
     CREATED, OK, UNAUTHORIZED, TokenNotFound, InvalidToken,
     } = require('../schemas/validations');

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

const getAll = async (req, res) => {
    const token = req.headers.authorization;
    const userAll = await usersServices.getAll();
    if (!token) {
        return res.status(UNAUTHORIZED).json({ message: TokenNotFound });
      }
    
      try {
        jwt.verify(token, 'JWT_kEY');
      } catch (_) {
        return res.status(UNAUTHORIZED).json({ message: InvalidToken });
      }

    res.status(OK).json(userAll);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const getUserId = await usersServices.getById(id);
  if (getUserId.message) {
    return res.status(getUserId.code)
    .json({ message: getUserId.message });
  }
  return res.status(OK).json(getUserId);
}

module.exports = {
    create,
    login,
    getAll,
    getById,
};
