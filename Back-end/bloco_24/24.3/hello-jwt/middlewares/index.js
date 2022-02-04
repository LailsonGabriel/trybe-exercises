const error = require('./error');
const { loginMiddleware } = require('./loginMiddleware');
const authMiddleware = require('./auth');

module.exports = {
  error,
  loginMiddleware,
  authMiddleware,
};
