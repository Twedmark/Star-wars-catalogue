import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import CharacterCard from "../../components/CharacterCard/CharacterCard";

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

import UseMovie from "../../hooks/UseMovie";

function Movie() {
  const location = useLocation();
  const navigate = useNavigate();
  const [movieData, setMovieData] = useState<any>(location.state);
  const { id } = useParams<string>();
  const { data } = id ? UseMovie(id) : { data: null };

  useEffect(() => {
    if (!movieData) setMovieData(data);
  }, []);

  return (
    <div>
      {movieData ? (
        <div>
          <Breadcrumbs />
          <h1>{movieData.title}</h1>
          <h3>{movieData.director}</h3>
          <h3>{movieData.producer}</h3>
          <h3>{movieData.release_date}</h3>
          <h3>Characters:</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {movieData?.characters.map((character: any) => (
              <CharacterCard key={character.name} character={character} />
            ))}
          </div>

          <h4>{movieData.opening_crawl}</h4>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
      <button onClick={() => navigate("./../../")}>Back</button>
    </div>
  );
}

export default Movie;
