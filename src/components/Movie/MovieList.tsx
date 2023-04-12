import React from "react";

function Film(props: any) {
  const { film } = props;

  function handleOnClick() {
    console.log(film);
  }

  return (
    <div>
      <div className="film" onClick={handleOnClick}>
        <h2>
          {film.title}({film.release_date.split("-")[0]})
        </h2>
      </div>
    </div>
  );
}

export default Film;
