import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../App";
import { MoviesList } from "../components/MoviesList";
import { Movie } from "../types/interfaces";

export const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState<{
    trendingMovies: Movie[];
    newestMovies: Movie[];
    topVotedMovies: Movie[];
  }>({ trendingMovies: [], newestMovies: [], topVotedMovies: [] });
  const navigate = useNavigate();

  const seeMovieDetails = (movieId: string) => {
    navigate(`/movie/${movieId}`);
  };

  const getTrendingMovies = async () => {
    setLoading(true);

    const responses = await Promise.all([
      fetch(
        `${API_URL}/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`
      ),
      fetch(
        `${API_URL}movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`
      ),
      fetch(`${API_URL}movie/latest?api_key=${process.env.REACT_APP_API_KEY}`),
    ]);

    const results: Array<{ results: Movie[] }> = await Promise.all(
      responses.map((res) => res.json())
    );

    setLoading(false);
    setMovies({
      trendingMovies: results[0].results,
      topVotedMovies: results[1].results,
      newestMovies: results[2].results,
    });
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);

  if (loading) return <div>...loading</div>;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column",
        width: "90%",
        height: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          paddingLeft: "5%",
          paddingTop: "5%",
        }}
      >
        <h3 style={{ color: "#FFFFFF" }}>Trending</h3>
        <div
          style={{ border: "2px solid #AD7D62", marginBottom: "1rem" }}
        ></div>
        <MoviesList
          movies={movies.trendingMovies}
          naviagateToMovieDetails={seeMovieDetails}
        />
      </div>
      <div
        style={{
          width: "100%",
          marginLeft: "5%",
          marginTop: "5%",
          marginBottom: "1rem",
        }}
      >
        <h3 style={{ color: "#FFFFFF" }}>Top voted</h3>
        <div
          style={{ border: "2px solid #AD7D62", marginBottom: "1rem" }}
        ></div>
        <MoviesList
          movies={movies.topVotedMovies}
          naviagateToMovieDetails={seeMovieDetails}
        />
      </div>
    </div>
  );
};
