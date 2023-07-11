import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [moviesData, setMoviesData] = useState([]);
  const dummyMovies = [
    {
      id: 1,
      title: "Some Dummy Movie",
      openingText: "This is the opening text of the movie",
      releaseDate: "2021-05-18",
    },
    {
      id: 2,
      title: "Some Dummy Movie 2",
      openingText: "This is the second opening text of the movie",
      releaseDate: "2021-05-19",
    },
    {
      id: 3,
      title: "Some Dummy Movie 2",
      openingText: "This is the second opening text of the movie",
      releaseDate: "2021-05-19",
    },
  ];

  const moviesDataHandler = () => {
    fetch("https://swapi.dev/api/films")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
       const transformedMovies = data.results.map((moviesData, ind) => {
          return {
            id: moviesData.episode_id,
            title: moviesData.title,
            openingText: moviesData.opening_crawl,
            releaseDate: moviesData.release_date,
          };
        });
        setMoviesData(transformedMovies);
      });
  };

  console.log(moviesData)
  return (
    <React.Fragment>
      <section>
        <button onClick={() => moviesDataHandler()}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={moviesData} />
      </section>
    </React.Fragment>
  );
}

export default App;
