import MovieCard from "../../components/MovieCard/MovieCard";
import { Container, Grid } from "./styles";
import routes from "../../api/routes";
import { MovieType } from "../../utils/types";

function LandingPage() {
  const { status, data } = routes.UseFilms();

  console.log(status);
  console.log(data);

  if (!data) {
    return <>{status}</>;
  }

  return (
    <Container>
      <Grid>
        {data.results.map((movie: MovieType) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </Grid>
    </Container>
  );
}

export default LandingPage;
