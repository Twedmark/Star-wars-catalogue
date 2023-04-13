import MovieCard from "../../components/MovieCard/MovieCard";
import { Container } from "./styles";
import UseMovies from "../../hooks/UseMovies";

type MovieType = {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
};

function LandingPage() {
  const { data, isLoading } = UseMovies();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container>
      {data.map((movie: MovieType) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
    </Container>
  );
}

export default LandingPage;
