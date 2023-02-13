const { Product } = require("../models/product.model");

module.exports.createProduct = async (request, response) => {
  try {
    const { tittle, price, description } = request.body;
    const product = await Product.create({
      tittle,
      price,
      description,
    });
    response.json(product);
  } catch (error) {
    response.json(error);
  }
};
