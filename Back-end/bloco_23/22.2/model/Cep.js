const connection = require("./connection");
const axios = require("axios");

const getCep = async (cep) => {
  const [cepResult] = await connection.execute(
    "SELECT * FROM cep_lookup.ceps WHERE cep = ?",
    [cep]
  );

  if (cepResult.length === 0) {
    const searchCEPinAPI = await getNewCepAPI(cep);
    if (!searchCEPinAPI) return null;
    const newAdress = {
      cep: searchCEPinAPI.cep.split("-").join(""),
      logradouro: searchCEPinAPI.logradouro,
      bairro: searchCEPinAPI.bairro.split(" ")[1],
      localidade: searchCEPinAPI.localidade,
      uf: searchCEPinAPI.uf,
    };
    console.log(newAdress);
    await createNewAdress(newAdress);
    return newAdress;
  }

  return cepResult;
};

const getNewCepAPI = async (cep) => {
  const response = axios
    .get(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res) => res.data);

  return response;
};

const createNewAdress = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const [cepCreated] = await connection.execute(
    "INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf) VALUES(?,?,?,?,?)",
    [cep, logradouro, bairro, localidade, uf]
  );
  if (cepCreated.length === 0) return null;

  return cepCreated;
};

module.exports = { getCep, createNewAdress };
