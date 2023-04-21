import { useNavigate } from "react-router-dom";

import routes from "../../api/routes";

import { CharacterCardContainer } from "./styles";

function CharacterCard(props: { character: string }) {
  const { character } = props;
  const navigate = useNavigate();

  const { status, data } = routes.UseCharacterByUrl(character);

  if (!data) {
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
      <h3>{data.name}</h3>
    </CharacterCardContainer>
  );
}

export default CharacterCard;
