const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const authToken = require("./auth-token");
const generateToken = require("./randomToken");

app.use(bodyParser.json());
app.use(authToken);

const basicRoutes = require("./routes/basicRoutes");
app.use("/teste", basicRoutes);

app.post("/greetings", (req, res) => {
  const { name, age } = req.body;
  if (Number(age) > 17)
    return res.status(201).json({ message: `Hello ${name}` });
  res.status(401).json({ message: "Unauthorized" });
});

const usersRoutes = require("./routes/usersRoutes");
app.use("/users", usersRoutes);

const simpsonsRoutes = require("./routes/simpsonsRoutes");
app.use("/simpsons", simpsonsRoutes);

app.post("/signup", (req, res) => {
  const { email, password, firstName, phone } = req.body;
  const user = [email, password, firstName, phone];
  user.forEach((field) => {
    if (field === undefined || field === "")
      return res.status(401).json({ message: "completed all fields" });
  });
  res.status(200).json({ token: generateToken() });
});

app.listen(5050, () => {
  console.log("Rota iniciada");
});
