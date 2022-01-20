const cepModel = require("../model/Cep");

const getCep = async (cep) => {
  const resultCep = await cepModel.getCep(cep);

  if (!resultCep) {
    return {
      error: {
        code: "notFound",
        message: `Não foi possível encontrar um o CEP:${cep}`,
      },
    };
  }

  return resultCep;
};

const getNewCEP = (cep, logradouro, bairro, localidade, uf) => ({
  cep: cep.split("-").join(""),
  logradouro,
  bairro,
  localidade,
  uf,
});

const createNewAdress = async (cep, logradouro, bairro, localidade, uf) => {
  const verifyCepExist = await cepModel.getCep(cep.split("-").join(""));
  const address = getNewCEP(cep, logradouro, bairro, localidade, uf);
  if (!verifyCepExist) {
    await cepModel.createNewAdress(address);

    return { cep, logradouro, bairro, localidade, uf };
  }

  return {
    error: {
      code: "alreadyExists",
      message: "CEP já existente",
    },
  };
};

module.exports = { getCep, createNewAdress };
