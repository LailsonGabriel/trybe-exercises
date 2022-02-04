const usersService = require('../services/usersService');
const jwt = require('jsonwebtoken');

const { SECRET } = process.env;

module.exports = async (req, res) => {
  try {
    const { username, password } = req.body;
    const [getUser] = await usersService.getUser(username);

    if (!getUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (getUser.password !== password || getUser.username !== username) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    const jsonConfig = { expiresIn: '1h', algorithm: 'HS256' };
    const payload = { username, admin: false };

    const token = jwt.sign(payload, SECRET, jsonConfig);

    return res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
