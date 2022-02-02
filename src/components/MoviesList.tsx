import React from "react";
import { Movie } from "../types/interfaces";
import { MovieListItem } from "./MovieListItem";

interface Props {
  movies: Movie[];
  naviagateToMovieDetails: (movieId: string) => void;
}

export const MoviesList: React.FC<Props> = ({
  movies,
  naviagateToMovieDetails,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {movies.map((movie) => (
        <MovieListItem onClick={naviagateToMovieDetails} movie={movie} />
      ))}
    </div>
  );
};
