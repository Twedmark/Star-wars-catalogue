import React from "react";

function Film(props: any) {
  const { film } = props;

  return (
    <div>
      <h2>{film.title}</h2>
    </div>
  );
}

export default Film;
