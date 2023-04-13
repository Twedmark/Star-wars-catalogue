import { useQuery } from "@tanstack/react-query";
import routes from "../api/routes";

export default function UseMovies() {
  return useQuery(["films"], () => routes.films());
}
