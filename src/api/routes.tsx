const BASE_URL = "https://swapi.dev/api/";
const routes: any = {};

routes.films = async () => {
  const URL = BASE_URL + "films/";
  const data = await getAllPages(URL);
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
