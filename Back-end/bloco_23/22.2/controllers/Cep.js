const express = require("express");
const router = express.Router();
const Joi = require("joi");
const { cepMiddleware } = require("../validate/validateCep");

const cepService = require("../services/Cep");

router.get("/:cep", cepMiddleware, async (req, res, next) => {
  const { cep } = req.params;
  const cepResult = await cepService.getCep(cep);

  if (cepResult.error) return next(cepResult.error);

  res.status(200).send(cepResult);
});

router.post("/", async (req, res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;

  const { error } = Joi.object({
    cep: Joi.string().not().empty().min(8).max(9).required(),
    logradouro: Joi.string().not().empty().required(),
    bairro: Joi.string().not().empty().required(),
    localidade: Joi.string().not().empty().required(),
    uf: Joi.string().not().empty().required(),
  }).validate({ cep, logradouro, bairro, localidade, uf });

  if (error) return next(error);

  const cepCreated = await cepService.createNewAdress(
    cep,
    logradouro,
    bairro,
    localidade,
    uf
  );

  if (cepCreated.error) return next(cepCreated.error);

  res.status(200).send(cepCreated);
});

module.exports = router;
