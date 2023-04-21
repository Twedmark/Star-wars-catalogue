import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import CharacterCard from "../../components/CharacterCard/CharacterCard";

import { CharacterType, MovieType } from "../../utils/types";
import routes from "../../api/routes";

function Movie() {
  const location = useLocation();
  const [movieData, setMovieData] = useState<MovieType>(location.state);
  const { id } = useParams<string>();
  const { status, data } = routes.UseFilm(id ? id : "");

  useEffect(() => {
    if (data) setMovieData(data);
  }, [data]);

  if (!movieData) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {movieData?.characters.map((characterURL: string, index: number) => (
        <CharacterCard key={index} character={characterURL} />
      ))}
    </div>
  );
}

export default Movie;
