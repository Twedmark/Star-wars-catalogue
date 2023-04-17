import { useNavigate } from "react-router-dom";
import { UseCharacterUrl } from "../../hooks/UseQuery";

import { CharacterCardContainer } from "./styles";

function CharacterCard(props: { character: string }) {
  const { character } = props;
  const navigate = useNavigate();
  let { data, isLoading } = UseCharacterUrl(character);

  if (isLoading || !data) {
    return <></>;
  }

  function handelOnClick() {
    const id = data?.url.split("/")[data.url.split("/").length - 2];
    navigate(`character/${id}`, {
      state: character,
    });
  }

  return (
    <CharacterCardContainer
      onClick={() => {
        handelOnClick();
      }}
    >
      <p>{data.name}</p>
    </CharacterCardContainer>
  );
}

export default CharacterCard;
