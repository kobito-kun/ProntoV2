const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderModel = new Schema({
  product: String,
  user: String,
  total: Number,
  email: String,
  name: String,
  paid: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  },
})

const Order = mongoose.model("Order", OrderModel);

module.exports.Order = Order