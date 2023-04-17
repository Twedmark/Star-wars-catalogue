import { useQuery, useQueryClient } from "@tanstack/react-query";
import routes from "../api/routes";

function UseCharacter(id: string) {
  return useQuery(
    ["character", "https://swapi.dev/api/people/" + id + "/"],
    () => routes.characterById(id)
  );
}

function UseCharacterUrl(URL: string) {
  return useQuery(["character", URL], () => routes.character(URL));
}

function UseMovieById(id: string) {
  return useQuery(["film", id], () => routes.film(id));
}

function UseMovieByUrl(URL: string) {
  return useQuery(["film", URL], () => routes.filmByUrl(URL));
}

function UseMovies() {
  const queryClient = useQueryClient();
  const { data: films } = useQuery(["films"], () => routes.films());

  if (films) {
    films.forEach((film) =>
      queryClient.setQueryData(
        ["film", film.url.split("/").slice(-2, -1)[0]],
        film
      )
    );
  }

  return {
    data: films,
  };
}

export {
  UseCharacter,
  UseCharacterUrl,
  UseMovieById,
  UseMovieByUrl,
  UseMovies,
};
