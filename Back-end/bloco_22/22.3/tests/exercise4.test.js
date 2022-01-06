const { expect } = require("chai");
const writeFile = require("../exercise2");
const fs = require("fs");
const sinon = require("sinon");

const RETORNO_FUNCAO_SUCESS = "ok";
const RETORNO_FUNCAO_ERROR = "Error";

describe("Ao ser passado os dois paramêtros da função", () => {
  before(() => {
    sinon.stub(fs, "writeFileSync").returns(RETORNO_FUNCAO_SUCESS);
  });
  after(() => {
    fs.writeFileSync.restore();
  });
  it("Deverá fazer a escrita do arquivo e preencher com conteúdo", () => {
    const result = writeFile("arquivo.txt", "Conteúdo");
    expect(result).to.be.equals("ok");
  });

  describe("Verifica se o formato da resposta", () => {
    it("é uma string", () => {
      const result = writeFile("arquivo.txt", "Conteúdo");
      expect(result).to.be.a("string");
    });
  });
});
