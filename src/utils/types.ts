export type MovieType = {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
};

export type CharacterType = {
  name: string;
  gender: string;
  height: string;
  hair_color: string;
  skin_color: string;
  mass: string;
  birth_year: string;
  eye_color: string;
  films: string[];
  homeworld: string;
  created: string;
  edited: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
};
