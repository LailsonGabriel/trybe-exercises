const fs = require("fs/promises");

function getTeams() {
  return fs
    .readFile("./teams.json", "utf-8")
    .then((fileContent) => JSON.parse(fileContent));
}

function setTeams(teams) {
  return fs.writeFile("./teams.json", JSON.stringify(teams));
}

module.exports = { getTeams, setTeams };
