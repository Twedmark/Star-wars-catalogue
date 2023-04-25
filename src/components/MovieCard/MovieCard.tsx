import { useNavigate } from "react-router-dom";
import { Card } from "./styles";
import { MovieType } from "../../utils/types";

function MovieCard(props: { movie: MovieType }) {
  const { movie } = props;
  const navigate = useNavigate();

  function handleOnClick() {
    navigate(`/movies/${movie.url[movie.url.length - 2]}`, { state: movie });
  }

  return (
    <Card onClick={handleOnClick}>
      <h2>{movie.title}</h2>
      <p>({movie.release_date.split("-")[0]})</p>
    </Card>
  );
}

export default MovieCard;
