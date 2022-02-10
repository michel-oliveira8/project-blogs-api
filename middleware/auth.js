const jwt = require('jsonwebtoken');
const { UNAUTHORIZED, TokenNotFound, InvalidToken } = require('../schemas/validations');

const authorizationToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(UNAUTHORIZED).json({ message: TokenNotFound });
  }

  try {
    jwt.verify(authorization, 'JWT_kEY');
  
    next();
  } catch (_) {
    return res.status(UNAUTHORIZED).json({ message: InvalidToken });
  }
};

module.exports = {
    authorizationToken,
};

// Referencia: https://github.com/tryber/sd-14a-live-lectures/blob/lecture/24.3/products-api/middlewares/authMiddleware.js