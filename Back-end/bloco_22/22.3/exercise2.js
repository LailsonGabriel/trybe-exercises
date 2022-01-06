const fs = require("fs");

const writeFile = (fileName, content) => {
  try {
    fs.writeFileSync(fileName, content);
    return "ok";
  } catch (e) {
    return new Error("Arquivo não encontrado");
  }
};

module.exports = writeFile;
