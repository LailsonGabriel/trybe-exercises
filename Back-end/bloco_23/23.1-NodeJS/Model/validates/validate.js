const validatePassword = (req, res, next) => {
  const { password } = req.body;
  if (typeof password !== "string" || password.length < 6) {
    return res.status(400).json({
      error: true,
      message: "O campo 'password' deve ter pelo menos 6 caracteres",
    });
  }

  next();
};

module.exports = { validatePassword };
