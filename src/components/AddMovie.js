import React, { useRef } from "react";

const AddMovie = (props) => {
    const title = useRef('');
    const openingText = useRef('');
    const releaseDate = useRef('');

    const addMovieData = (e) =>{
        e.preventDefault();
        console.log(title.current.value)
    }

  return (
    <>
      <form onSubmit={() => addMovieData()}>
        <section>
          <div>
            <label>Title</label>
            <br />
            <input ref={title}/>
            <br />
          </div>

          <div>
            <label>Opening Text</label>
            <br />
            <textarea type="text" ref={openingText}/>
            <br />
          </div>

          <div>
            <label>Release Date</label>
            <br />
            <input type="date" ref={releaseDate}/>
          </div>
        </section>
        <button className="btn-fetch">Add Movie</button>
      </form>
    </>
  );
};

export default AddMovie;
