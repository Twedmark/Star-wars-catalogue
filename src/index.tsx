import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import LandingPage from "./views/landing/landing";
import Movie from "./views/movie/movie";
import Character from "./views/character/character";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/character/:id" element={<Character />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);
