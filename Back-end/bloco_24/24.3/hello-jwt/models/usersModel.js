const connection = require('./connection');

const getUser = async (username) => {
  const [user] = await connection.execute(
    'SELECT * FROM Users WHERE username = ?',
    [username],
  );

  return user;
};

module.exports = { getUser };
