const {Product} = require("./models/Product.models.js");
const {User} = require("./models/User.models.js");
const {Order} = require("./models/Order.models.js");

module.exports = {
  
  /**
  * Returns an array of users
  * @return {(Object|Array)}
  */

  allUsers: () => {
    return new Promise((resolve, reject) => {
      User.find({}, (err, result) => {
        if(err) reject(err);
        else resolve(result);
      })
    })
  },

  /**
  * Returns a user
  * @params {String} id
  * @return {Object}
  */  

  getUser: (id) => {
    return new Promise((resolve, reject) => {
      User.findOne({_id: id}, (err, result) => {
        if(err) reject(err);
        else resolve(result);
      })
    })
  },

  /**
  * Returns an array of products
  * @return {(Object|Array)}
  */    

  allProducts: () => {
    return new Promise((resolve, reject) => {
      Product.find({}, (err, result) => {
        if(err) reject(err);
        else resolve(result);
      })
    })
  },

  /**
  * Returns a product
  * @params {String} id
  * @return {Object}
  */   

  getProduct: (id) => {
    return new Promise((resolve, reject) => {
      Product.findOne({_id: id}, (err, result) => {
        if(err) reject(err);
        else resolve(result);
      })
    })
  },

  /**
   * Returns an array of user's products
   * @param {id} Input
   * @return {Array|Object}
   */

  getAllProductsFromUser: (user) => {
    return new Promise((resolve, reject) => {
      Product.find({user: user["user"]}, (err, result) => {
        if(err) reject(err);
        else resolve(result); 
      })
    })
  },

  /**
   * Creates a product
   * @params {Object| {title: String, description: String, image: String, user: String, price: Float}}
   * @return {Object}
   */

  createProduct: (input) => {
    input = input.input;
    return new Promise((resolve, reject) => {
      const newProduct = new Product({
        title       : input["title"],
        description : input["description"],
        image       : input["image"],
        user        : input["user"],
        price       : input["price"]
      });
      newProduct.save()
      resolve(newProduct);
    })
  },

  /**
   * Gets an order
   * @params {id} Input
   * @returns {Object}
   */

  getOrder: (input) => {
    return new Promise((resolve, reject) => {
      Order.findOne({_id: input}, (err, result) => {
        if(err) reject(err);
        else resolve(result);
      })
    })
  },

  /**
   * Gets all the orders [DEBUG]
   * @returns {Array|Object}
   */

  allOrders: () => {
    return new Promise((resolve, reject) => {
      Order.find({}, (err, result) => {
        if(err) reject(err);
        else resolve(result);
      })
    })
  }

}