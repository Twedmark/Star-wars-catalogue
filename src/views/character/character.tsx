import { useLocation, useNavigate, useHref } from "react-router-dom";
import UseCharacter from "../../hooks/UseCharacter";

function Character() {
  const location = useLocation();
  const navigate = useNavigate();
  const href = useHref("/");

  console.log(href);
  console.log(location);

  const { data, isLoading } = UseCharacter(
    location.pathname.split("/")[location.pathname.split("/").length - 1]
  );

  return (
    <div>
      {!isLoading ? (
        <div>
          <h1>{data.name}</h1>
          <h2>{data.birth_year}</h2>
          <h2>{data.height}</h2>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default Character;
