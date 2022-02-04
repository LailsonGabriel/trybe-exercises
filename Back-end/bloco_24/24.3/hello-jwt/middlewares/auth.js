const jwt = require('jsonwebtoken');
const { SECRET } = process.env;
const serviceUsers = require('../services/usersService');

const verifyJWT = async (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token)
    return res.status(401).json({ auth: false, message: 'Token not Found!' });

  try {
    const decoded = jwt.verify(token, SECRET);

    const [getUser] = await serviceUsers.getUser(decoded.username);

    if (!getUser)
      return res
        .status(401)
        .json({ message: 'Erro ao procurar usuário do token.' });

    req.username = getUser.username;
    next();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = verifyJWT;
