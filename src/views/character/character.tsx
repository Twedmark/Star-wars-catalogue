import { useParams, useNavigate } from "react-router-dom";

import { UseCharacter, UseMovieByUrl } from "../../hooks/UseQuery";
import { Button, Container, CharacterSection, MovieList } from "./styles";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

function Character() {
  const navigate = useNavigate();
  const { id } = useParams<string>();
  const { data, isLoading } = UseCharacter(id ? id : "");

  if (isLoading || !data) {
    return <h1>Loading...</h1>;
  }

  const Films = ({ Film }: { Film: string }) => {
    const { data, isLoading } = UseMovieByUrl(Film);

    if (isLoading || !data) {
      return <h1>Loading...</h1>;
    }

    return (
      <div>
        <h2
          onClick={() =>
            navigate("/movie/" + data.url.split("/").slice(-2, -1)[0])
          }
        >
          {data.title}
        </h2>
      </div>
    );
  };

  return (
    <>
      <Breadcrumbs />
      <Container>
        <CharacterSection>
          <h1>{data.name}</h1>
          <p>gender: {data.gender}</p>
          <p>height: {data.height}cm</p>
          <p>Weight: {data.mass}kg</p>
          <p>Birth Year: {data.birth_year}</p>
          <p>Eye Color: {data.eye_color}</p>
          <p>Hair Color: {data.hair_color}</p>
          <Button onClick={() => navigate("./../../")}>Back</Button>
        </CharacterSection>
        <CharacterSection>
          <p>Appears in {data.films.length} films: </p>
          <MovieList>
            {data?.films.map((film) => (
              <Films key={film} Film={film} />
            ))}
          </MovieList>
        </CharacterSection>
      </Container>
    </>
  );
}

export default Character;
