// This schema defines a Book type and Query and Mutation types for fetching, adding, updating, and deleting books.

const { gql } = require('apollo-server');

const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
    year: Int!
  }

  type Query {
    books: [Book]
    book(id: ID!): Book
  }

  input AddBookInput {
  title: String!
  author: String!
  year: Int!
}

type Mutation {
  addBook(input: AddBookInput!): Book
  updateBook(id: ID!, title: String, author: String, year: Int): Book
  deleteBook(id: ID!): Book
}

`;

// type Mutation {
//   addBook(title: String!, author: String!, year: Int!): Book
//   updateBook(id: ID!, title: String, author: String, year: Int): Book
//   deleteBook(id: ID!): Book
// }

module.exports = typeDefs;
