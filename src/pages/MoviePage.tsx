import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../App";
import { ActorsList } from "../components/ActorsList";
import { MovieDescription } from "../components/MovieDescription";
import { MovieTrailerElement } from "../components/MovieTrailerElement";
import { ReviewsList } from "../components/ReviewsList";
import { Actor, Movie, Review, Video } from "../types/interfaces";

export const MoviePage = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(false);
  const [movieData, setMovieData] = useState<{
    movie: Movie;
    reviews: Review[];
    actors: Actor[];
    videos: Video;
  }>();

  const getMovieData = async () => {
    setLoading(true);
    const responses = await Promise.all([
      fetch(`${API_URL}/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`),
      fetch(
        `${API_URL}/movie/${id}/reviews?api_key=${process.env.REACT_APP_API_KEY}`
      ),
      fetch(`
      ${API_URL}/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`),
      fetch(
        `${API_URL}movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      ),
    ]);

    const results = await Promise.all(
      responses.map((response) => response.json())
    );

    const movie = results[0];
    const reviews = results[1].results;
    const videos = results[2].results.filter(
      (video: Video) => video.type === "Trailer" && video.official
    )[0];
    const actors = results[3].cast;

    setMovieData({ actors, movie, reviews, videos });

    setLoading(false);
  };

  useEffect(() => {
    getMovieData();
  }, []);

  if (loading || !movieData) return <div>...Loading</div>;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: "white" }}>{movieData?.movie.title}</h1>
      <MovieTrailerElement videoId={movieData?.videos.key} />
      <MovieDescription
        description={movieData.movie.overview}
        genres={movieData.movie.genres}
        rating={movieData.movie.vote_average}
      />
      <ActorsList actors={movieData.actors} />
      <ReviewsList reviews={movieData.reviews} />
    </div>
  );
};
