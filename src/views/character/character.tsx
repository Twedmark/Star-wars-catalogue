import { useParams, useNavigate } from "react-router-dom";

import { Button, Container, CharacterSection, MovieList } from "./styles";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import routes from "../../api/routes";

function Character() {
  const navigate = useNavigate();
  const { id } = useParams<string>();
  const { status, data } = routes.UseCharacter(id ? id : "");

  if (!data) {
    return <h1>{status}</h1>;
  }

  const Films = ({ Film }: { Film: string }) => {
    const { status, data } = routes.UseFilmByUrl(Film);

    if (!data) {
      return <h1>{status}</h1>;
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
