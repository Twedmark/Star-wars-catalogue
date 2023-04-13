import { useQuery } from "@tanstack/react-query";
import routes from "../api/routes";

export default function UseCharacter(id: string) {
  return useQuery(
    ["character", "https://swapi.dev/api/people/" + id + "/"],
    () => routes.characterById(id)
  );
}
