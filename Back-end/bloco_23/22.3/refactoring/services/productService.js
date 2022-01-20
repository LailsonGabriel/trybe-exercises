const productModel = require("../models/productModel");

const errorNotFound = (id) => {
  return {
    error: {
      code: 404,
      message: `Não encontramos esse produto de ID:${id}, em nosso banco de dados`,
    },
  };
};

const add = async (name, brand) => {
  const added = await productModel.add(name, brand);

  if (!added)
    return {
      error: {
        code: 500,
        message: "O servidor encontrou uma situação com a qual não sabe lidar.",
      },
    };
  return added;
};

const getAll = async () => {
  const allProducts = await productModel.getAll();

  if (!allProducts)
    return {
      error: {
        code: 502,
        message: "O servidor não encontrou nada no banco de dados",
      },
    };

  return allProducts;
};

const getById = async (id) => {
  const product = await productModel.getById(id);

  if (!product) return errorNotFound(id);

  return product;
};

const update = async (id, name, brand) => {
  const productUpdated = await productModel.update(id, name, brand);

  if (!productUpdated) return errorNotFound(id);

  return product;
};

const exclude = async (id) => {
  const productDeleted = await productModel.exclude(id);

  if (!productDeleted) return errorNotFound(id);
};

module.exports = { add, getAll, getById, update, exclude };
