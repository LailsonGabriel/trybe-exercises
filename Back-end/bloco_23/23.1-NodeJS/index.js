const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;

const users = require("./Model/Users");
const { validatePassword } = require("./Model/validates/validate");

app.use(bodyParser.json());

app.post("/users", validatePassword, async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const validate = users.validateNewUser(firstName, lastName, email);
  if (!validate) return res.status(400).json({ message: "Invalid Fields" });
  await users.newUser(firstName, lastName, email, password);
  res.status(201).send({ message: "New user created" });
});

app.get("/users", async (_req, res) => {
  const allUsers = await users.getUsers();
  if (!allUsers) return res.status(200).json({ message: [] });
  res.status(200).send(allUsers);
});

app.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  const user = await users.getUserById(id);
  if (!user) return res.status(404).json({ error: true, message: "Not Found" });
  res.status(200).json(user);
});

app.put("/users/:id", validatePassword, async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;
  const allUsers = await users.getUsers();
  const userExist = allUsers.some((usr) => usr.id === Number(id));
  const validate = users.validateNewUser(firstName, lastName, email);
  if (!validate) return res.status(400).json({ message: "Invalid Fields" });
  if (!userExist) return res.status(404).json({ message: "User not found" });
  await users.editUserById(id, firstName, lastName, email, password);
  res.status(200).send({ message: "User edited successfully" });
});

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
