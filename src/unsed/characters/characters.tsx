import MovieCard from "../../components/MovieCard/MovieCard";
import { Container } from "./styles";
import UseCharacters from "../../hooks/UseCharacters";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import { useState } from "react";

function Characters() {
  const { data, isLoading } = UseCharacters();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container>
      {data.map((character: any) => (
        <CharacterCard key={character.name} characterData={character} />
      ))}
    </Container>
  );
}

export default Characters;
