import React, { useState } from "react";
import { useQuery, useLazyQuery, gql, useMutation } from "@apollo/client";

const QUERY_ALL_USERS = gql`
  query GetAllUsers {
    users {
      id
      name
      age
      nationality
    }
  }
`;

const QUERY_ALL_MOVIES = gql`
  query GetAllMovies {
    movies {
      id
      name
    }
  }
`;

const GET_MOVIE_BY_NAME = gql`
  query movie($name: String!) {
    movie(name: $name) {
      name
      id
    }
  }
`;

const CREATE_USER_MUTATION = gql`
  mutation CreateUser($input: createInputUser!) {
    createUser(input: $input) {
      name
      id
    }
  }
`;

function DisplayData() {
  const [movieSearched, setMovieSearched] = useState("");

  // Create User States
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [nationality, setNationality] = useState("");

  const { data, loading, refetch } = useQuery(QUERY_ALL_USERS);
  const { data: movieData } = useQuery(QUERY_ALL_MOVIES);
  const [fetchMovie, { data: movieSearchedData, error: movieError }] =
    useLazyQuery(GET_MOVIE_BY_NAME);

  const [createUser] = useMutation(CREATE_USER_MUTATION);

  if (loading) {
    return <h1> DATA IS LOADING...</h1>;
  }

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Age..."
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Nationality..."
          onChange={(event) => {
            setNationality(event.target.value.toUpperCase());
          }}
        />
        <button
          onClick={() => {
            createUser({
              variables: {
                input: { name, age: Number(age), nationality },
              },
            });

            refetch();
          }}
        >
          Create User
        </button>
      </div>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Nationality</th>
        </tr>

        {data &&
          data.users.map((user) => {
            return (
              <tr>
                <td> {user.name}</td>
                <td> {user.age}</td>
                <td> {user.nationality}</td>
              </tr>
            );
          })}
      </table>

      <table>
        <tr>
          <th>Name</th>
        </tr>
        {movieData &&
          movieData.movies.map((movie) => {
            return (
              <tr key={movie.name}>
                <td> {movie.name}</td>
              </tr>
            );
          })}
      </table>
      <div>
        <input
          type="text"
          placeholder="find movie id..."
          onChange={(event) => {
            setMovieSearched(event.target.value);
          }}
        />
        <button
          onClick={() => {
            fetchMovie({
              variables: {
                name: movieSearched,
              },
            });
          }}
        >
          Fetch Data
        </button>
        <div>
          {movieSearchedData && (
            <div>
              <h1>ID: {movieSearchedData.movie.id}</h1>
              <h1>MovieName: {movieSearchedData.movie.name}</h1>
            </div>
          )}
          {movieError && <h1> There was an error fetching the data</h1>}
        </div>
      </div>
    </div>
  );
}

export default DisplayData;
