const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductModel = new Schema({
  title: String,
  image: String,
  user: String,
  price: Number,
  description: String,
  date: {
    type: Date,
    default: Date.now
  },
})

const Product = mongoose.model("Product", ProductModel);

module.exports.Product = Product