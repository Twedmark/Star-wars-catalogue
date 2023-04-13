const BASE_URL = "https://swapi.dev/api/";
const routes: any = {};

routes.film = async (id: string) => {
  const URL = BASE_URL + "films/" + id;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

routes.films = async () => {
  const URL = BASE_URL + "films/";
  const data = await getAllPages(URL);
  return data;
};

routes.character = async (URL: string) => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

routes.characterById = async (id: string) => {
  const URL = BASE_URL + "people/" + id;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

routes.people = async () => {
  const URL = BASE_URL + "people/";
  const data = await getAllPages(URL);
  return data;
};

async function getAllPages(url: string) {
  let data: any = [];
  let nextURL = url;
  while (nextURL) {
    let response = await fetch(nextURL);
    let json = await response.json();
    data = data.concat(json.results);
    nextURL = json.next;
  }
  return data;
}

export default routes;
