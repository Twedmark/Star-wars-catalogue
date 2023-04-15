import { useQuery } from "@tanstack/react-query";
import routes from "../api/routes";

export default function UseCharacters() {
  return useQuery(["character", URL], () => routes.people());
}
