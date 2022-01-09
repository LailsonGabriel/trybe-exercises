var express = require("express");
var router = express.Router();

router.put("/:name/:age", (req, res) => {
  const { name, age } = req.params;
  res.status(200).json({ message: `Seu nome é ${name} e sua idade ${age}` });
});

module.exports = router;
