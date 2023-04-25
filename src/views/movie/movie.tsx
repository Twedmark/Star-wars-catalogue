import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { MovieContainer, MovieInfo, Button } from "./styles";

import { MovieType } from "../../utils/types";
import routes from "../../api/routes";

function Movie() {
  const location = useLocation();
  const navigate = useNavigate();

  const [movieData, setMovieData] = useState<MovieType>(location.state);
  const { id } = useParams<string>();
  const { status, data } = routes.UseFilm(id ? id : "");

  if (!movieData) {
    if (data) setMovieData(data);
    return <h1>{status}</h1>;
  }

  return (
    <MovieContainer>
      <h1>{movieData.title}</h1>
      <MovieInfo>
        <h4>Movie info</h4>
        <p>Director: {movieData.director}</p>
        <p>Producer: {movieData.producer}</p>
        <p>Release Date: {movieData.release_date}</p>
        <p>Episode: {movieData.episode_id}</p>
      </MovieInfo>
      <MovieInfo>
        <h4>Opening Crawl:</h4>
        <p>{movieData.opening_crawl}</p>
      </MovieInfo>
      <Button onClick={() => navigate("./../../")}>Back</Button>
    </MovieContainer>
  );
}

export default Movie;
