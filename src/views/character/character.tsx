import { useParams, useNavigate } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import UseCharacter from "../../hooks/UseCharacter";

function Character() {
  const navigate = useNavigate();
  const { id } = useParams<string>();
  const { data, isLoading } = id
    ? UseCharacter(id)
    : { data: null, isLoading: true };

  return (
    <div>
      {!isLoading ? (
        <div>
          <Breadcrumbs />
          <h1>{data.name}</h1>
          <h2>{data.birth_year}</h2>
          <h2>{data.height}</h2>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
      <button onClick={() => navigate("./../../")}>Back</button>
    </div>
  );
}

export default Character;
