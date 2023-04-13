import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import routes from "../../api/routes";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import { useNavigate } from "react-router-dom";

function Movie() {
  const location = useLocation();
  const navigate = useNavigate();
  const [movieData, setMovieData] = useState<any>(null);

  useEffect(() => {
    if (location.state) {
      setMovieData(location.state);
    } else {
      console.log("no state, fetching data");
      const id = location.pathname[location.pathname.length - 1];
      routes.film(id).then((response: any) => {
        setMovieData(response);
      });
    }
  }, []);

  return (
    <div>
      {movieData ? (
        <div>
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
              <CharacterCard key={character} character={character} />
            ))}
          </div>

          <h4>{movieData.opening_crawl}</h4>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default Movie;
