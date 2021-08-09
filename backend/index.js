// Initial Imports
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const jwt_decode = require("jwt-decode");
require("dotenv/config");

// Express Startup
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({limit: "50mb", extended: false}))
app.use(cors());

// GraphQL Imports
const schema = buildSchema(require("./schema.js"));
const root = require("./root.js");

// MongoDB Models Imports
const {Product} = require("./models/Product.models.js");
const {User} = require("./models/User.models.js");
const {Order} = require("./models/Order.models.js");

function generateAccessToken(data) {
  return jwt.sign(data, process.env.SECRET_TOKEN, { expiresIn: '1d' });
}

function authenticateToken(req, res) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  let authenticated;

  if (token == null) return authenticated = false;

  jwt.verify(token, process.env.SECRET_TOKEN, (err, user) => {
    if (err) return authenticated = false;
    else return authenticated = true;
  })
  return authenticated;
}

// GraphQL Root
app.use("/graphql", graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}))

// Express Test Route
app.get("/", (_, res) => {
  User.find({}, (err, ress) => {
    res.json(ress)
  })
})

app.post("/updateProfile", (req, res) => {
  const {_id, username, email} = req.body;
  User.findOne({_id: _id}, (err, result) => {
    if(err) return console.log(err);
    if(jwt_decode(token)["_id"] !== result._id) return res.json({"message": "what are you doing here"});
    else {
      result.username = username;
      result.email = email;
      result.save();
      return res.json({"message": "success"});
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

app.post("/login", (req, res) => {
  const {email, password} = req.body;
  if(email == null || password == null) return res.json({"message": "missing some stuff broda"});
  User.findOne({email: email}, (err, user) => {
    if(err) return console.log(err);
    else {
      try{
        if(user.password === password){
          return res.json({
            token: generateAccessToken({_id: user._id, secret_message: "hi mom",}),
            _id: user._id,
          });
        }else{
          return res.status(202).json({"message": "not authenticated"});
        }
      }catch{
        return res.status(202).json({"message": "not authenticated"})
      }
    }
  })
})

// Mongoose Connection
mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true},  () => console.log("DB Connected."))

// Express Listening...
app.listen(port, () => console.log("Server running at port " + port))