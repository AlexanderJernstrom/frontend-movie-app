import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { MoviePage } from "./pages/MoviePage";
import { Navbar } from "./components/Navbar";
import { DiscoverPage } from "./pages/DiscoverPage";

export const API_URL = "https://api.themoviedb.org/3/";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <Navbar />
              <HomePage />
            </>
          }
        />
        <Route
          path="/movie/:id"
          element={
            <>
              <Navbar />
              <MoviePage />
            </>
          }
        />
        <Route
          path="/discover"
          element={
            <>
              <Navbar />
              <DiscoverPage />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
