// Initial Imports
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const mongoose = require("mongoose");
const cors = require("cors");

// Express Startup
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json({limit: "10mb"}));
app.use(express.urlencoded({limit: "10mb", extended: false}))
app.use(cors());

// GraphQL Imports
const schema = buildSchema(require("./schema.js"));
const root = require("./root.js");

// MongoDB Models Imports
const {Product} = require("./models/Product.models.js");
const {User} = require("./models/User.models.js");
const {Order} = require("./models/Order.models.js");

// GraphQL Root
app.use("/graphql", graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}))

/**
 * 
const OrderModel = new Schema({
  product: String,
  user: String,
  total: Number,
  email: String,
  name: String,
  date: {
    type: Date,
    default: Date.now
  },
})
 */

// Express Test Route
app.get("/", (_, res) => {
  const newOrder= new Order({
    product: "6110b164a92e5e26e89b6dec",
    user: "60f470487fa26519907d72b9",
    total: 300,
    email: "dad@mom.com",
    name: "dad sad Mom",
    paid: false
  })
  newOrder.save();
  res.json(newOrder)
})

app.post("/updateProfile", (req, res) => {
  const {_id, username, email} = req.body;
  User.findOne({_id: _id}, (err, result) => {
    if(err) return console.log(err);
    else {
      result.username = username;
      result.email = email;
      result.save();
      return res.json({"message": "success"})
    }
  })
})

app.delete("/deleteProduct/:_id", (req, res) => {
  const {_id} = req.params;
  Product.deleteOne({_id: _id}, (err) => {
    if(err) return console.log(err);
    else return res.json({"message": "deleted"})
  })
})

app.post("/updateProduct", (req, res) => {
  const {_id, title, image, price, description} = req.body;
  Product.findOne({_id: _id}, (err, result) => {
    if(err) return console.log(err);
    else {
      result.title = title;
      result.image = image;
      result.price = price;
      result.description = description;
      result.save()
      res.json(result);
    }
  })
})

// Mongoose Connection
mongoose.connect("mongodb://127.0.0.1:27017", {useNewUrlParser: true, useUnifiedTopology: true},  () => console.log("DB Connected."))

// Express Listening...
app.listen(port, () => console.log("Server running at port " + port))