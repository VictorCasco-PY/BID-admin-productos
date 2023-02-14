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

//Actualizar un producto
module.exports.updateProduct = async (request, response) => {
  try {
    const updatedProduct = await Product.findOneAndUpdate(
      { _id: request.params.id },
      request.body,
      { new: true }
    );
    response.json(updatedProduct);
  } catch (error) {
    response.json(error);
  }
};

//Eliminar producto
module.exports.deleteProduct = async (request, response) => {
  try {
    const deletedConfirmation = await Product.deleteOne({
      _id: request.params.id,
    });
    response.json(deletedConfirmation);
  } catch (error) {
    response.json(error);
  }
};
