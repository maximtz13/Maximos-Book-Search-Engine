const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  input savedBooksInput {
  authors: Array
  description: String
  title: String
  bookId: String
  image: String
  link: String
  }

  type Book {
  bookId: String
  authors: Array
  description: String
  title: String
  image: String
  link: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    savedBooks(input: [savedBooksInput!]!) User
  }
`;

module.exports = typeDefs;
