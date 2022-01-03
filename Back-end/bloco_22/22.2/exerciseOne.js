const exerciseOne = (a, b, c) => {
  return new Promise((resolve, reject) => {
    if (
      typeof a !== "number" ||
      typeof b !== "number" ||
      typeof c !== "number"
    ) {
      reject(new Error("Informe apenas números"));
    }
    const calculatedValue = (a + b) * c;
    if (calculatedValue < 50) reject(new Error("Valor Muito Baixo"));
    resolve(calculatedValue);
  });
};

module.exports = { exerciseOne };
