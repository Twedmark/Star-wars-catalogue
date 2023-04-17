import { useParams, useNavigate } from "react-router-dom";

import { Button, Container, CharacterInfo, MovieList } from "./styles";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { UseCharacter, UseMovieByUrl } from "../../hooks/UseQuery";

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

  console.log(data);

  return (
    <>
      <Breadcrumbs />
      <Container>
        <CharacterInfo>
          <h1>{data.name}</h1>
          <p>gender: {data.gender}</p>
          <p>height: {data.height}cm</p>
          <p>Weight: {data.mass}kg</p>
          <p>Birth Year: {data.birth_year}</p>
          <p>Eye Color: {data.eye_color}</p>
          <p>Hair Color: {data.hair_color}</p>
          <Button onClick={() => navigate("./../../")}>Back</Button>
        </CharacterInfo>
        <CharacterInfo>
          <p>Appears in {data.films.length} films: </p>
          <MovieList>
            {data?.films.map((film) => (
              <Films Film={film} />
            ))}
          </MovieList>
        </CharacterInfo>
      </Container>
    </>
  );
}

export default Character;
