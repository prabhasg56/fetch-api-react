import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import LoadingApp from "./components/LoadingApp";
import AddMovie from "./components/AddMovie";

function App() {
  const [moviesData, setMoviesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
  const moviesDataHandler = useCallback( async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch("https://swapi.dev/api/films");

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

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
    } catch (error) {
      setError(error.message)
    }
    setIsLoading(false);
  },[]);

  const addNewMovieHandler = (movie) => {
    if(!isLoading){
      setMoviesData([...moviesData, movie])
    }
  }

  useEffect(() => {
    moviesDataHandler();
  },[]) // when component rerender useEffect gets call, and component rerendering happing, when the any state has update

  let contents = <p>No data found</p>

  if(moviesData.length > 0){
    contents =  <MoviesList movies={moviesData} />
  }

  if(error){
    contents = <p>{error} <button className="btn fw-bold">....Retrying</button> <br/><button className="btn fw-bold">Cancel</button></p>;
  }

  if(isLoading) {
    contents = <LoadingApp /> 
  }

  return (
    <React.Fragment>
      <section>
      <AddMovie movies={addNewMovieHandler}/>
      </section>
      <section>
        <button className="btn-fetch" onClick={() => moviesDataHandler()}>Fetch Movies</button>
      </section>
      <section>
        {contents}
        
        {/* {!isLoading && moviesData.length > 0 && (
          <MoviesList movies={moviesData} />
        )}
        {!isLoading && moviesData.length === 0 && !error && <p>No data found</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <LoadingApp />} */}
      </section>
    </React.Fragment>
  );
}

export default App;
