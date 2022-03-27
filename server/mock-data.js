const userData = [
  {
    id: 1,
    name: "shatish",
    age: 23,
    gender: "MALE",
    nationality: "INDIA",
    friends: [
      {
        id: 2,
        name: "sanskruti",
        age: 2,
        gender: "FEMALE",
        nationality: "INDIA",
      },
      {
        id: 3,
        name: "bhautik",
        age: 26,
        gender: "MALE",
        nationality: "USA",
      },
    ],
    favoriteMovies: [1, 2, 3],
  },
  {
    id: 2,
    name: "sanskruti",
    age: 2,
    gender: "FEMALE",
    nationality: "INDIA",
    friends: [],
    favoriteMovies: [],
  },
  {
    id: 3,
    name: "bhautik",
    age: 26,
    gender: "MALE",
    nationality: "USA",
    friends: [
      {
        id: 3,
        name: "dharmik",
        age: 20,
        gender: "MALE",
        nationality: "UK",
      },
    ],
    favoriteMovies: [],
  },
  {
    id: 4,
    name: "dharmik",
    age: 20,
    gender: "MALE",
    nationality: "UK",
    friends: [],
    favoriteMovies: [5],
  },
  {
    id: 5,
    name: "harshil",
    age: 18,
    gender: "MALE",
    nationality: "AUSTRALIA",
    friends: [
      {
        id: 1,
        name: "shatish",
        age: 23,
        gender: "MALE",
        nationality: "INDIA",
        friends: [],
      },
    ],
    favoriteMovies: [],
  },
];

const movieData = [
  {
    id: 1,
    name: "The Kashmir Files",
  },
  {
    id: 2,
    name: "Spiderman No Way Home",
  },
  {
    id: 3,
    name: "The Nun",
  },
  {
    id: 4,
    name: "The Irishman",
  },
  {
    id: 5,
    name: "God of War",
  },
];

module.exports = { userData, movieData };
