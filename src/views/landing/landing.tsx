import MovieCard from "../../components/MovieCard/MovieCard";
import { Container, Grid } from "./styles";
import { UseMovies } from "../../hooks/UseQuery";

function LandingPage() {
  const { data } = UseMovies();

  if (!data) {
    return <></>;
  }

  return (
    <Container>
      <Grid>
        {data.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </Grid>
    </Container>
  );
}

export default LandingPage;
