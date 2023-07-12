import React from 'react';

import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList = (props) => {
  
  const deleteMovieHandler = (id) => {
    props.deleteMovie(id)
  }

  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
       <>
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
        <button className='btn btn-danger fw-bold' onClick={() => deleteMovieHandler(movie.id)}>delete</button>
       </>
      ))}
    </ul>
  );
};

export default MovieList;
