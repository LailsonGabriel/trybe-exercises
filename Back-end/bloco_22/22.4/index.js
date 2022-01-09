const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { getSimpsons, setSimpsons } = require("./fs.utils");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("First");
});

app.get("/ping", (req, res) => {
  res.status(200).send({ message: "Pong" });
});

app.post("/hello", (req, res) => {
  const { name } = req.body;
  res.status(201).json({ message: name });
});

app.post("/greetings", (req, res) => {
  const { name, age } = req.body;
  if (age > 17) return res.status(201).json({ message: `Hello ${name}` });
  res.status(401).json({ message: "Unauthorized" });
});

app.put("/users/:name/:age", (req, res) => {
  const { name, age } = req.params;
  res.status(200).json({ message: `Seu nome é ${name} e sua idade ${age}` });
});

app.get("/simpsons", async (req, res) => {
  const simpsons = await getSimpsons();
  res.status(200).json(simpsons);
});

app.get("/simpsons/:id", async (req, res) => {
  const simpsons = await getSimpsons();
  const { id } = req.params;
  console.log(id);
  const searchCharacter = simpsons.find((character) => character.id === id);
  if (!searchCharacter) return res.status(404).json({ message: "Not Found" });
  res.status(200).json(searchCharacter);
});

app.post("/simpsons", async (req, res) => {
  const { id, name } = req.body;
  const simpsons = await getSimpsons();
  const searchId = simpsons.find((simp) => simp.id === String(id));
  if (searchId) return res.status(409).json({ message: "id already exists" });
  simpsons.push({ id: String(id), name });
  setSimpsons(simpsons);
  res.status(204).end();
});

app.listen(5050, () => {
  console.log("Rota iniciada");
});
