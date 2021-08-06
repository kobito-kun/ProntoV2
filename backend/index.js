// Initial Imports
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const mongoose = require("mongoose");
const cors = require("cors");

// Express Startup
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

// GraphQL Imports
const schema = buildSchema(require("./schema.js"));
const root = require("./root.js");

// MongoDB Models Imports
const {Product} = require("./models/Product.models.js");
const {User} = require("./models/User.models.js");

// GraphQL Root
app.use("/graphql", graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}))

// Express Test Route
app.get("/", (_, res) => {
  // Product.deleteMany({title: null}, (err, ree) => {
  //   res.json(ree)
  // })
  Product.find({user: "60f470487fa26519907d72b9"}, (err, result) => {
    res.json(result)
  })
})

// Mongoose Connection
mongoose.connect("mongodb://127.0.0.1:27017", {useNewUrlParser: true, useUnifiedTopology: true},  () => console.log("DB Connected."))

// Express Listening...
app.listen(port, () => console.log("Server running at port " + port))