const {Product} = require("./models/Product.models.js");
const {User} = require("./models/User.models.js");

module.exports = {
  
  /*
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

  /*
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

  /*
  * Returns an array of products
  * @return {(Object|Array)}
  */    

  getProducts: () => {
    return new Promise((resolve, reject) => {
      Product.find({}, (err, result) => {
        if(err) reject(err);
        else resolve(result);
      })
    })
  },

  /*
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
  }
}