const validateCep = (cep) => {
  const cepSearch = cep.split("-")[0];
  if (String(cepSearch).length !== 8) return false;
  return true;
};

const cepMiddleware = (req, res, next) => {
  const { cep } = req.params;
  if (!validateCep(cep))
    return res.status(400).send({ message: "Invalid CEP" });

  next();
};

module.exports = { cepMiddleware };
