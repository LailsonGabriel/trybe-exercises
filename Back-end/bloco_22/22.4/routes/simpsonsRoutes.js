var express = require("express");
var router = express.Router();
const { getSimpsons, setSimpsons } = require("../fs.utils");

router.get("/", async (req, res) => {
  const simpsons = await getSimpsons();
  res.status(200).json(simpsons);
});

router.get("/:id", async (req, res) => {
  const simpsons = await getSimpsons();
  const { id } = req.params;
  console.log(id);
  const searchCharacter = simpsons.find((character) => character.id === id);
  if (!searchCharacter) return res.status(404).json({ message: "Not Found" });
  res.status(200).json(searchCharacter);
});

router.post("/", async (req, res) => {
  const { id, name } = req.body;
  const simpsons = await getSimpsons();
  const searchId = simpsons.find((simp) => simp.id === String(id));
  if (searchId) return res.status(409).json({ message: "id already exists" });
  simpsons.push({ id: String(id), name });
  setSimpsons(simpsons);
  res.status(204).end();
});

module.exports = router;
