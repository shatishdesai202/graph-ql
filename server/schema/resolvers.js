const { userData, movieData } = require("../mock-data");

const resolvers = {
  Query: {
    users: () => {
      return userData;
    },
    user: (_, args) => {
      const id = args.id;
      return userData.find((user) => user.id === +id);
    },
    movies: () => {
      return movieData;
    },
    movie: (_, args) => {
      const name = args.name;
      return movieData.find((user) => user.name === name);
    },
  },
  User: {
    favoriteMovies: (_, args) => {
      const favoriteMovies = _.favoriteMovies;
      return movieData.filter((movie) => favoriteMovies.includes(movie.id));
    },
  },

  Mutation: {
    createUser: (parent, args) => {
      let userDetail = args.input;
      userDetail = { ...userDetail, id: userData.length + 1 };
      userData.push(userDetail);
      return userDetail;
    },
    updateUserName: (parent, args) => {
      const { id, newUsername } = args.input;
      const updatedUser = userData.filter((user) => {
        if (+user.id === +id) {
          user.name = newUsername;
          return user;
        }
      });
      return updatedUser[0];
    },
    deleteUser: (parent, args) => {
      const { id } = args;
      const index = userData.findIndex((user) => +user.id === +id);
      return userData.splice(index, 1)[0];
    },
  },
};

module.exports = { resolvers };
