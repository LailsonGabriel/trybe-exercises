const loginMiddleware = async (req, res, next) => {
  const { username, password } = req.body;

  const error = {
    code: 401,
    message:
      'Required username and password are type string and length less than five characters',
  };

  const { message, code } = error;

  if (typeof username !== 'string' || username.length < 5) {
    return res.status(code).json({ message });
  }
  if (typeof password !== 'string' || password.length < 5) {
    return res.status(code).json({ message });
  }

  next();
};

module.exports = { loginMiddleware };
