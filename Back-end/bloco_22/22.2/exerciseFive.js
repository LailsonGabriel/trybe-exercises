const fs = require("fs").promises;
const arrayDeString = ["Finalmente", "estou", "usando", "Promise.all", "!!!"];

const multiplePromises = async () => {
  Promise.all(arrayDeString).then(([a, b, c, d, f]) => {
    [a, b, c, d, f].forEach((file, index) => {
      fs.writeFile(`file${index}.text`, file);
    });
  });
};

const onePromises = async () => {
  Promise.all(arrayDeString).then(([a, b, c, d, f]) => {
    const result = [a, b, c, d, f].join(" ");
    fs.writeFile("fileAll.txt", result);
  });
};
