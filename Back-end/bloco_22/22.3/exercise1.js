const whatCondition = (number) => {
  if (number < 0) return "negativo";
  if (number > 0) return "positivo";
  if (typeof number !== "number") return "o valor deve ser um número";
  return "neutro";
};

module.exports = whatCondition;
