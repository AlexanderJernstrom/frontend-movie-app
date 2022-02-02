import React from "react";
import { Movie } from "../types/interfaces";
import { genres } from "../lib/genres";

interface Props {
  movie: Movie;
  onClick: (movieId: string) => void;
}

export const MovieListItem: React.FC<Props> = ({ movie, onClick }) => {
  return (
    <div
      style={{
        cursor: "pointer",
        backgroundImage: !movie?.poster_path
          ? `none`
          : `url(https://image.tmdb.org/t/p/w200/${movie.poster_path})`,
        backgroundRepeat: "no-repeat",
        width: "200px",
        height: "300px",
      }}
      onClick={() => onClick(String(movie.id))}
    >
      <div
        className="movie-list-item-overlay"
        style={{
          color: "#FFFFFF",
          wordBreak: "keep-all",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          textAlign: "center",
          gap: "0.2rem",
        }}
      >
        <h3>{movie.title}</h3>
        <span>{movie.release_date}</span>
        <span>Rating: {movie.vote_average}</span>
      </div>
    </div>
  );
};
