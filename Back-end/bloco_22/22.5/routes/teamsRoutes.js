const express = require("express");
const fs = require("fs");
const { getTeams, setTeams } = require("../fs-utils");
const router = express.Router();

const validadeTeams = (req, res, next) => {
  const { name, initials, country, league } = req.body;
  if (name.length < 5 || initials.length > 3 || country.length < 3) {
    return res.status(404).json({ message: "Invalid data" });
  }

  req.team = { name, initials, country, league };
  next();
};

router.post("/", validadeTeams, async (req, res) => {
  const team = req.team;
  const teams = await getTeams();
  teams.push(team);
  res.status(201).json(teams);
  setTeams(teams);
});

router.get("/", async (req, res) => {
  const teams = await getTeams();
  if (!teams || teams.length === 0) return res.status(200).json({ teams: [] });
  res.status(200).json(teams);
});

module.exports = router;
