const express = require("express");
const { validateNewUser, validateLogin } = require("../validateUser");
const { randomBytes } = require("crypto");
const router = express.Router();

router.post("/register", validateNewUser, (req, res) => {
  res.status(201).json({ message: "user created" });
});

router.post("/login", validateLogin, (req, res) => {
  const token = randomBytes(6).toString("hex");
  res.status(200).json({ token: token });
});

module.exports = router;
