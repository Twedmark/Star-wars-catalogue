import { useNavigate } from "react-router-dom";
import { Card } from "./styles";
import { MovieType } from "../../utils/types";

function MovieList(props: { movie: MovieType }) {
  const { movie } = props;
  const navigate = useNavigate();

  function handleOnClick() {
    navigate(`/movie/${movie.url[movie.url.length - 2]}`, { state: movie });
  }

  return (
    <Card onClick={handleOnClick}>
      <div className="movie">
        <h4>
          {movie.title} ({movie.release_date.split("-")[0]})
        </h4>
      </div>
    </Card>
  );
}

export default MovieList;
