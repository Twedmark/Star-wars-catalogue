import { useNavigate } from "react-router-dom";

import { CharacterCardContainer } from "./styles";
import { CharacterType } from "../../utils/types";

function CharacterCard(props: { character: CharacterType }) {
  const { character } = props;
  const navigate = useNavigate();

  function handelOnClick() {
    const id = character.url.split("/")[character.url.split("/").length - 2];
    navigate(`${id}`, {
      state: character,
    });
  }

  return (
    <CharacterCardContainer
      onClick={() => {
        handelOnClick();
      }}
    >
      <h4>{character.name}</h4>
    </CharacterCardContainer>
  );
}

export default CharacterCard;
