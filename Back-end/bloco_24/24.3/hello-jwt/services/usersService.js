const usersModel = require('../models/usersModel');

const getUser = async (username) => usersModel.getUser(username);

module.exports = { getUser };
