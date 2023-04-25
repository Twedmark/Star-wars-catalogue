import { useState, useEffect } from "react";
import type { MovieType, CharacterType } from "../utils/types";

type cacheType = {
  Movie: { [key: string]: MovieType };
  Character: { [key: string]: CharacterType };
};

type multipleMovies = {
  count: number;
  next: string;
  previous: string;
  results: MovieType[];
};

type multipleCacheType = {
  [key: string]: multipleMovies;
};

const cache: cacheType = {
  Movie: {},
  Character: {},
};

const MultipleCache: multipleCacheType = {};

const useFetchMovie = (url: string) => {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState<MovieType>();

  console.log(cache);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setStatus("Loading...");
      if (cache.Movie[url]) {
        const data = cache.Movie[url];
        cacheAllCharactersFromMovie(data);
        setData(data);
        setStatus("fetched");
      } else {
        const response = await fetch(url);
        const data = await response.json();
        cacheAllCharactersFromMovie(data);
        cache.Movie[url] = data;
        setData(data);
        setStatus("fetched");
      }
    };

    fetchData();
  }, [url]);

  return { status, data };
};

function cacheAllCharactersFromMovie(movie: MovieType) {
  movie.characters.forEach((url) => {
    if (!cache.Character[url]) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          cache.Character[url] = data;
        });
    }
  });
}

const useFetchCharacter = (url: string) => {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState<CharacterType>();

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setStatus("Loading...");
      if (cache.Character[url]) {
        const data = cache.Character[url];

        setData(data);
        setStatus("fetched");
      } else {
        const response = await fetch(url);
        const data = await response.json();

        cache.Character[url] = data;
        setData(data);
        setStatus("fetched");
      }
    };

    fetchData();
  }, [url]);

  return { status, data };
};

const useGetAllCachedCharacters = () => {
  return Object.values(cache.Character);
};

const useFetchMultiple = (url: string) => {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState<multipleMovies>();

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setStatus("Loading...");
      if (MultipleCache[url]) {
        const data = MultipleCache[url];
        setData(data);
        setStatus("fetched");
      } else {
        const response = await fetch(url);
        const data = await response.json();
        data.results = data.results.map((item: MovieType) => {
          cache.Movie[item.url] = item;
          return item;
        });

        MultipleCache[url] = data;
        setData(data);
        setStatus("fetched");
      }
    };

    fetchData();
  }, [url]);

  return { status, data };
};

export {
  useFetchMovie,
  useFetchCharacter,
  useGetAllCachedCharacters,
  useFetchMultiple,
};
