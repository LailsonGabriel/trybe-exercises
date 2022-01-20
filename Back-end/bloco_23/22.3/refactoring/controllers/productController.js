const express = require("express");
const ProductService = require("../services/productService");

const router = express.Router();

router.get("/", async (_req, res, _next) => {
  const products = await ProductService.getAll();

  res.status(200).send(products);
});

router.get("/:id", async (req, res, next) => {
  const product = await ProductService.getById(req.params.id);

  res.status(200).send(product);
});

router.post("/", async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductService.add(name, brand);

  res.status(201).send(newProduct);
});

router.delete("/:id", async (req, res) => {
  const products = await ProductService.exclude(req.params.id);

  res.status(204).send(products);
});

router.put("/:id", async (req, res) => {
  const { name, brand } = req.body;

  const products = await ProductService.update(req.params.id, name, brand);

  res.status(204).send(products);
});

module.exports = router;
