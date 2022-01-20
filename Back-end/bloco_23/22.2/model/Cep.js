const connection = require("./connection");

const getCep = async (cep) => {
  const [cepResult] = await connection.execute(
    "SELECT * FROM cep_lookup.ceps WHERE cep = ?",
    [cep]
  );

  if (cepResult.length === 0) return null;

  return cepResult;
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
