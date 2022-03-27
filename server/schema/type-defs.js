const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    users: [User]
    user(id: ID!): User
    favoriteMovies(id: ID!): [Movie]
    movies: [Movie]
    movie(name: String!): Movie
  }

  input createInputUser {
    name: String!
    age: Int!
    nationality: Nationality!
  }

  input UpdateUsernameInput {
    id: ID!
    newUsername: String!
  }

  type Mutation {
    createUser(input: createInputUser!): User
    updateUserName(input: UpdateUsernameInput): User
    deleteUser(id: ID!): User
  }

  type Movie {
    id: ID!
    name: String!
  }

  type User {
    id: ID!
    name: String!
    age: Int!
    gender: Gender!
    nationality: Nationality!
    friends: [User!]
    favoriteMovies: [Movie]
  }

  enum Gender {
    MALE
    FEMALE
  }

  enum Nationality {
    INDIA
    USA
    UK
    AUSTRALIA
  }
`;

module.exports = { typeDefs };
