import {
  useFetchCharacter,
  useFetchMovie,
  useFetchMultiple,
} from "../hooks/UseFetch";

const BASE_URL = "https://swapi.dev/api/";

const UseFilm = (id: string) => {
  const URL = BASE_URL + "films/" + id + "/";
  return useFetchMovie(URL);
};

const UseFilms = () => {
  const URL = BASE_URL + "films/";
  return useFetchMultiple(URL);
};

const UseFilmByUrl = (URL: string) => {
  return useFetchMovie(URL);
};

const UseCharacter = (id: string) => {
  const URL = BASE_URL + "people/" + id + "/";
  return useFetchCharacter(URL);
};

const UseCharacterByUrl = (URL: string) => {
  return useFetchCharacter(URL);
};

const routes = {
  UseFilm,
  UseFilms,
  UseFilmByUrl,
  UseCharacter,
  UseCharacterByUrl,
};

export default routes;
