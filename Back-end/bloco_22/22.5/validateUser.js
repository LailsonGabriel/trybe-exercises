const validateNewUser = (req, res, next) => {
  const { username, email, password } = req.body;
  const emailRe = /\S+@\S+\.\S+/;
  if (
    !emailRe.test(email) ||
    username.length < 3 ||
    String(password).length < 4 ||
    String(password).length > 8
  ) {
    return res.status(400).json({ message: "invalid data" });
  }
  next();
};

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  const emailRe = /\S+@\S+\.\S+/;
  if (
    !emailRe.test(email) ||
    String(password).length < 4 ||
    String(password).length > 8
  ) {
    return res.status(400).json({ message: "email or password is incorrect" });
  }
  next();
};

module.exports = { validateNewUser, validateLogin };
