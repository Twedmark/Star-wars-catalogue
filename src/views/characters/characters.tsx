import CharacterCard from "../../components/CharacterCard/CharacterCard";

import { CharactersContainer } from "./styles";
import { useGetAllCachedCharacters } from "../../hooks/UseFetch";

function Characters() {
  const characterData = useGetAllCachedCharacters();

  if (characterData.length <= 0) {
    return <h1>Visit a movie first</h1>;
  }

  return (
    <CharactersContainer>
      {characterData.map((character) => (
        <CharacterCard key={character.name} character={character} />
      ))}
    </CharactersContainer>
  );
}

export default Characters;
