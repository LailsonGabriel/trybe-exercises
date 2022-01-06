const { expect } = require("chai");
const whatCodition = require("../exercise1");

const retornoFuncao = [
  "positivo",
  "negativo",
  "neutro",
  "o valor deve ser um número",
];
const [positivo, negativo, neutro, notNumber] = retornoFuncao;

describe("Se o número passado for maior que 0", () => {
  it("deverá retornar positivo", () => {
    const result = whatCodition(1);
    expect(result).to.be.equals(positivo);
  });
});

describe("Se o número passado for menor que 0", () => {
  it("deverá retornar negativo", () => {
    const result = whatCodition(-1);
    expect(result).to.be.equals(negativo);
  });
});

describe("Se o número passado for igual a 0", () => {
  it("deverá retornar neutro", () => {
    const result = whatCodition(0);
    expect(result).to.be.equals(neutro);
  });
});

describe("Se o paramêtro passado não for igual um número", () => {
  it("deverá retornar um error", () => {
    const result = whatCodition("teste");
    expect(result).to.be.equals(notNumber);
  });
});
