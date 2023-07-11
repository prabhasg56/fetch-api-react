import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import LoadingApp from "./components/LoadingApp";

function App() {
  const [moviesData, setMoviesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  /* promises handled by async and await */
  const moviesDataHandler = async () => {
    setIsLoading(true);

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
    setIsLoading(false);

  };

  return (
    <React.Fragment>
      <section>
        <button onClick={() => moviesDataHandler()}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && moviesData.length > 0 && <MoviesList movies={moviesData} />}
        {!isLoading && moviesData.length === 0 && <p>No data found</p>}

        {isLoading && <LoadingApp/>}
      </section>
    </React.Fragment>
  );
}

export default App;
