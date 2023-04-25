import { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

import routes from "../../api/routes";
import { Button, Container, CharacterSection } from "./styles";
import type { CharacterType } from "../../utils/types";

function Character() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams<string>();
  const [characterData, setCharacterData] = useState<CharacterType>(
    location.state
  );

  if (!characterData) {
    const { status, data } = routes.UseCharacter(id ? id : "");
    if (data) setCharacterData(data);
    return <h1>{status}</h1>;
  }

  return (
    <>
      <Container>
        <h1>{characterData.name}</h1>
        <CharacterSection>
          <p>Gender: {characterData.gender}</p>
          <p>Birth year: {characterData.birth_year}</p>
          <p>Height: {characterData.height}cm</p>
          <p>Weight: {characterData.mass}kg</p>
        </CharacterSection>
        <CharacterSection>
          <p>Eye color: {characterData.eye_color}</p>
          <p>Hair color: {characterData.hair_color}</p>
          <p>skin color: {characterData.skin_color}</p>
          <p>Appears in {characterData.films.length} films.</p>
        </CharacterSection>
        <Button onClick={() => navigate("./../")}>Back</Button>
      </Container>
    </>
  );
}

export default Character;
