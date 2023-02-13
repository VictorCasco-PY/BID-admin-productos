const { Product } = require("../models/product.model");

//Crear un nuevo producto
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

//Listar todos los productos
module.exports.findAllProducts = async (request, response) => {
  try {
    const productList = await Product.find({});
    response.json(productList);
  } catch (error) {
    response.json(error);
  }
};

//Mostrar un solo producto por ID
module.exports.getProduct = async (request, response) => {
  try {
    const productId = await Product.findOne({ _id: request.params.id });
    response.json(productId);
  } catch (error) {
    response.json(error);
  }
};
