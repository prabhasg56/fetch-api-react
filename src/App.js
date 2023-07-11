import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [moviesData, setMoviesData] = useState([]);

  // const moviesDataHandler = () => {
  //   fetch("https://swapi.dev/api/films")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //      const transformedMovies = data.results.map((moviesData, ind) => {
  //         return {
  //           id: moviesData.episode_id,
  //           title: moviesData.title,
  //           openingText: moviesData.opening_crawl,
  //           releaseDate: moviesData.release_date,
  //         };
  //       });
  //       setMoviesData(transformedMovies);
  //     });
  // };


  // promises handled by async and await //
  const moviesDataHandler = async () => {
    const response = await fetch("https://swapi.dev/api/films");

    const jsonResponse = await response.json();

    const transformedMovies = jsonResponse.results.map((moviesData, ind) => {
      return {
        id: moviesData.episode_id,
        title: moviesData.title,
        openingText: moviesData.opening_crawl,
        releaseDate: moviesData.release_date,
      };
    });

    setMoviesData(transformedMovies);
  };

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
