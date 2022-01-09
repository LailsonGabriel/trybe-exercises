const express = require("express");
const router = express.Router();
const rescue = require("express-rescue");

router.get(
  "/:id",
  rescue((req, res) => {
    const { id } = req.params;
    res.status(200).json({ message: `Seu id é: ${id}` });
  }),
  (err, _req, _res, next) => {
    if (err.code == "ENOENT") {
      const newError = new Error(err.message);
      (newError.code = "id not found"), (newError.status = 404);
      return next(newError);
    }
    next(err);
  }
);

module.exports = router;
