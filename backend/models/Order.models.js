const mongoose = require("mongoose");
const Schema = mongoose.Schema;

type Order {
  _id: String!
  product: String!
  total: Float!
  email: String!
  name: String!
  date: String!
}



const OrderModel = new Schema({
  product: String,
  total: Number,
  email: String,
  name: String,
  date: {
    type: Date,
    default: Date.now
  },
})

const Order = mongoose.model("Order", OrderModel);

module.exports.Order = Order