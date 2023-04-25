import { useNavigate } from "react-router-dom";
import { Card, Title } from "./styles";
import { MovieType } from "../../utils/types";

function MovieCard(props: { movie: MovieType }) {
  const { movie } = props;
  const navigate = useNavigate();

  function handleOnClick() {
    console.log(movie);
    navigate(`/movies/${movie.url[movie.url.length - 2]}`, { state: movie });
  }

  return (
    <Card onClick={handleOnClick}>
      <Title>{movie.title}</Title>
      <p>({movie.release_date.split("-")[0]})</p>
    </Card>
  );
}

export default MovieCard;
