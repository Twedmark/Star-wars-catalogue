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
  const URL = BASE_URL + "people/" + id;
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

// async function getAllPages(url: string) {
//   let data: any = [];
//   let nextURL = url;
//   while (nextURL) {
//     let response = await fetch(nextURL);
//     let json = await response.json();
//     data = data.concat(json.results);
//     nextURL = json.next;
//   }
//   return data;
// }

export default routes;
