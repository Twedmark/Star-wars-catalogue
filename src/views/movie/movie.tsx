import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import {
  MovieContainer,
  MovieInfo,
  MovieCharacters,
  Button,
  CharacterList,
} from "./styles";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { UseMovieById } from "../../hooks/UseQuery";
import { MovieType } from "../../utils/types";

function Movie() {
  const location = useLocation();
  const navigate = useNavigate();

  const [movieData, setMovieData] = useState<MovieType>(location.state);
  const { id } = useParams<string>();
  const { data, isLoading } = UseMovieById(id ? id : "");

  useEffect(() => {
    if (!movieData && data) setMovieData(data);
  }, [isLoading]);

  if (isLoading || !movieData) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Breadcrumbs />
      <MovieContainer>
        <MovieInfo>
          <h1>{movieData.title}</h1>
          <p>Director: {movieData.director}</p>
          <p>Producer: {movieData.producer}</p>
          <p>Release Date: {movieData.release_date}</p>
          <p>Episode: {movieData.episode_id}</p>

          <h4>Opening Crawl:</h4>
          <p>{movieData.opening_crawl}</p>
          <Button onClick={() => navigate("./../../")}>Back</Button>
        </MovieInfo>
        <MovieCharacters>
          <h2>Characters:</h2>
          <CharacterList>
            {movieData?.characters.map(
              (characterURL: string, index: number) => (
                <CharacterCard key={index} character={characterURL} />
              )
            )}
          </CharacterList>
        </MovieCharacters>
      </MovieContainer>
    </div>
  );
}

export default Movie;
