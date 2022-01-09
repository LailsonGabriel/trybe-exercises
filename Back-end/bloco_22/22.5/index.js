const express = require("express");
const validateUser = require("./validateNewUser");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.post("/user/register", validateUser, (req, res) => {
  res.status(201).json({ message: "user created" });
});

app.listen(8080, () => {
  console.log("Aplicação Iniciada");
});
