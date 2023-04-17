import { MovieType, CharacterType } from "../utils/types";
const BASE_URL = "https://swapi.dev/api/";

type Routes = {
  film: (id: string) => Promise<MovieType>;
  filmByUrl: (URL: string) => Promise<MovieType>;
  films: () => Promise<MovieType[]>;
  character: (URL: string) => Promise<CharacterType>;
  characterById: (id: string) => Promise<CharacterType>;
};

const film = async (id: string) => {
  const URL = BASE_URL + "films/" + id;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

const filmByUrl = async (URL: string) => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

const films = async () => {
  const URL = BASE_URL + "films/";
  const response = await fetch(URL);
  const data = await response.json();
  return data.results;
};

const character = async (URL: string) => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

const characterById = async (id: string) => {
  const URL = BASE_URL + "people/" + id;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

const routes: Routes = {
  film,
  filmByUrl,
  films,
  character,
  characterById,
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
