const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Lailson-29",
  database: "users_crud",
});

module.exports = connection;
