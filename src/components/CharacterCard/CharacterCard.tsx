import { useNavigate } from "react-router-dom";
import UseCharacterUrl from "../../hooks/UseCharacterUrl";

function CharacterCard(props: any) {
  const { character } = props;
  const navigate = useNavigate();

  const { data } = UseCharacterUrl(character);

  function handelOnClick() {
    const id = data.url.split("/")[data.url.split("/").length - 2];
    navigate(`/character/${id}`, {
      state: character,
    });
  }
  return data ? (
    <div
      className="character-card"
      onClick={() => {
        handelOnClick();
      }}
      style={{
        backgroundColor: "lightblue",
        width: "10vw",
        marginLeft: "2.5vw",
      }}
    >
      <p>{data.name}</p>
    </div>
  ) : (
    <></>
  );
}

export default CharacterCard;
