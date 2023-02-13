const mongoose = require("mongoose");

const ProductScheme = new mongoose.Schema(
  {
    tittle: { type: String },
    price: { type: Number },
    description: { type: String },
  },
  { timestamps: true }
);
module.exports.Product = mongoose.model("Product", ProductScheme);
