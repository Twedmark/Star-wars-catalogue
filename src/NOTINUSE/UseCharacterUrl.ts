import { useQuery } from "@tanstack/react-query";
import routes from "../api/routes";

export default function UseCharacterUrl(URL: string) {
  return useQuery(["character", URL], () => routes.character(URL));
}
