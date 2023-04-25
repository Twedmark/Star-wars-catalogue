import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import LandingPage from "./views/landing/landing";
import Movie from "./views/movie/movie";
import Character from "./views/character/character";
import Characters from "./views/characters/characters";
import Navbar from "./components/Navbar/Navbar";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const routes = [
  {
    path: "/*",
    name: "Movies",
    main: () => <LandingPage />,
  },
  {
    path: "/movies",
    name: "Movies",
    main: () => <LandingPage />,
  },
  {
    path: "/movies/:id",
    name: "Movie",
    main: () => <Movie />,
  },
  {
    path: "/characters",
    name: "Characters",
    main: () => <Characters />,
  },
  {
    path: "characters/:id",
    name: "Character",
    main: () => <Character />,
  },
];

root.render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        {routes.map(({ path, main }) => (
          <Route key={path} path={path} element={main()} />
        ))}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
