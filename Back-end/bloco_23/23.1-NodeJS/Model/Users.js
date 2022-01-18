const connection = require("./connection/connection");

const validateNewUser = (firstName, lastName, email) => {
  if (!firstName || typeof firstName !== "string") return false;
  if (!lastName || typeof lastName !== "string") return false;
  if (!email || typeof email !== "string") return false;

  return true;
};

const serialize = ({ id, first_name, last_name, email, password }) => {
  return {
    id,
    firstName: first_name,
    lastName: last_name,
    email,
    password,
  };
};

const newUser = async (firstName, lastName, email, password) => {
  connection.execute(
    "INSERT INTO users_crud.users (first_name, last_name, email, password) VALUES (?,?,?,?)",
    [firstName, lastName, email, password]
  );
};

const getUsers = async () => {
  const [users] = await connection.execute("SELECT * FROM users_crud.users");
  if (users.length === 0) return null;
  return users.map(serialize);
};

const getUserById = async (id) => {
  const [users] = await connection.execute(
    "SELECT * FROM users_crud.users WHERE id = ?",
    [id]
  );
  if (users.length === 0) return null;
  return users.map(serialize);
};

const editUserById = async (id, firstName, lastName, email, password) => {
  const [users] = await connection.execute(
    "UPDATE users_crud.users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?",
    [firstName, lastName, email, password, id]
  );
};

module.exports = {
  newUser,
  validateNewUser,
  getUsers,
  getUserById,
  editUserById,
};
