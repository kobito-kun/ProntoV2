module.exports = `
type User {
  _id: String!
  username: String!
  email: String!
  password: String!
}

type Product {
  _id: String!
  title: String!
  description: String!
  image: String!
  date: String!
  user: String!
  price: Float!
}

type Order {
  _id: String!
  product: String!
  user: String!
  total: Float!
  email: String!
  name: String!
  date: String!
  paid: Boolean!
}

input ProductInput {
  title: String!
  description: String!
  image: String!
  user: String!
  price: Float!
}

input UserInput {
  username: String!
  email: String!
  password: String!
}

type Query {
  allUsers: [User!]!
  getUser(_id: String!): User
  allProducts: [Product!]!
  getProduct(_id: String!): Product
  getAllProductsFromUser(user: String!): [Product]
  getOrder(_id: String!): Order
  allOrders(user: String!): [Order!]!
}

type Mutation {
  createUser(input: UserInput): User
  createProduct(input: ProductInput): Product
}

schema {
  query: Query
  mutation: Mutation
}
`