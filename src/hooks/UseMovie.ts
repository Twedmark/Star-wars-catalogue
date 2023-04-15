import { useQuery } from "@tanstack/react-query";
import routes from "../api/routes";

export default function UseMovies(id: string) {
  return useQuery(["films", id], () => routes.film(id));
}