import React, { useRef, useState } from "react";

const AddMovie = (props) => {
  const title = useRef("");
  const openingText = useRef("");
  const releaseDate = useRef("");
  const [error, setError] = useState(null);

  const addMovieData = (e) => {
    e.preventDefault();

    const moveTitle = title.current.value,
      movieOpeningText = openingText.current.value,
      movieReleaseDate = releaseDate.current.value;

    const newMovieDetails = {
      title: moveTitle,
      openingText: movieOpeningText,
      releaseDate: movieReleaseDate,
    };

    if (
      newMovieDetails.title &&
      newMovieDetails.openingText &&
      newMovieDetails.releaseDate
    ) {
        setError(null)
      props.movies(newMovieDetails);
    } else {
      setError("Please enter all the input!");
    }

    title.current.value = "";
    openingText.current.value = "";
    releaseDate.current.value = "";
  };

  return (
    <>
      <form>
        <section className="fw-bold ">
          <p className="text-danger fw-bold"> {error} </p>
          <div>
            <label class="float-start">Title</label>
            <br />
            <input className="form-control" ref={title} />
            <br />
          </div>

          <div>
            <label class="float-start">Opening Text</label>
            <br />
            <textarea className="form-control" type="text" ref={openingText} />
            <br />
          </div>

          <div>
            <label class="float-start">Release Date</label>
            <br />
            <input className="form-control" type="date" ref={releaseDate} />
          </div>
        </section>
        <button className="btn-fetch" onClick={(e) => addMovieData(e)}>
          Add Movie
        </button>
      </form>
    </>
  );
};

export default AddMovie;
