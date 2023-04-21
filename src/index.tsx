import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./index.css";

import LandingPage from "./views/landing/landing";
import Movie from "./views/movie/movie";
import Character from "./views/character/character";
import Characters from "./views/characters/characters";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const routes = [
  {
    path: "/",
    main: () => <LandingPage />,
  },
  {
    path: "/movie/:id",
    main: () => <Movie />,
  },
  {
    path: "/movie/:id/characters",
    main: () => <Characters />,
  },
  {
    path: "/movie/:id/characters/:id",
    main: () => <Character />,
  },
];

root.render(
  <StrictMode>
    <BrowserRouter>
      <Breadcrumbs routes={routes} />
      <Routes>
        {routes.map(({ path, main }) => (
          <Route key={path} path={path} element={main()} />
        ))}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
