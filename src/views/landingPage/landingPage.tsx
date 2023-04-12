import React, { useEffect, useState } from "react";
import "./landingPage.css";
import routes from "../../api/routes";
import Film from "../../components/film/film";

type FilmType = {
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

function LandingPage() {
  const [films, setFilms] = useState<FilmType[]>([]),
    [loading, setLoading] = useState(true);

  useEffect(() => {
    getFilms();
  }, []);

  async function getFilms() {
    routes.films().then((response: FilmType[]) => {
      setFilms(response);
      setLoading(false);
      console.log(response);
    });
  }

  const filmList = films.map((film: FilmType) => <Film film={film} />);

  return <div className="App">{loading ? <h1>Loading...</h1> : filmList}</div>;
}

export default LandingPage;
