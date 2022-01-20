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

const formatCEP = (cep) => {
  const regexCEP = /\d{5}-\d{3}/;
  if (regexCEP.test(cep)) return cep;
  return cep.replace(/(\d{5})(\d{3})/, "$1-$2");
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
