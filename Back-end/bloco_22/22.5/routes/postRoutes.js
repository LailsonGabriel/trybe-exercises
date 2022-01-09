const express = require("express");
const router = express.Router();
const rescue = require("express-rescue");

const ids = [5];

router.get(
  "/:id",
  rescue((req, res) => {
    const { id } = req.params;
    ids.push(id);
    res.status(200).json({ ids: ids });
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

router.get("/", (req, res) => {
  if (ids.length === 0)
    return res.status(404).json({ posts: [], message: "Not found posts" });
  res.status(200).json({ posts: ids });
});

module.exports = router;
