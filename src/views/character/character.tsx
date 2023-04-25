import React, { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

import routes from "../../api/routes";
import { Button, Container, CharacterSection, MovieList } from "./styles";
import type { CharacterType } from "../../utils/types";

function Character() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams<string>();
  const [characterData, setCharacterData] = useState<CharacterType>(
    location.state
  );
  const { status, data } = routes.UseCharacter(id ? id : "");

  if (!characterData) {
    if (data) setCharacterData(data);
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
            navigate("/movies/" + data.url.split("/").slice(-2, -1)[0])
          }
        >
          {data.title}
        </h2>
      </div>
    );
  };

  return (
    <>
      <Container>
        <CharacterSection>
          <h1>{characterData.name}</h1>
          <p>gender: {characterData.gender}</p>
          <p>height: {characterData.height}cm</p>
          <p>Weight: {characterData.mass}kg</p>
          <p>Birth Year: {characterData.birth_year}</p>
          <p>Eye Color: {characterData.eye_color}</p>
          <p>Hair Color: {characterData.hair_color}</p>
          <p>Appears in {characterData.films.length} films</p>
          <Button onClick={() => navigate("./../")}>Back</Button>
        </CharacterSection>
        {/* <CharacterSection>
          
           <MovieList>
            {characterData?.films.map((film) => (
              <Films key={film} Film={film} />
            ))}
          </MovieList> 
        </CharacterSection> */}
      </Container>
    </>
  );
}

export default Character;
