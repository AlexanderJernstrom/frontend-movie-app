import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { API_URL } from "../App";
import { Filter } from "../components/Filter";
import { MovieListItem } from "../components/MovieListItem";
import { MoviesList } from "../components/MoviesList";
import { PageChange } from "../components/PageChange";
import { formatFilterAPIString } from "../lib/formatFilterAPIstring";
import { Movie } from "../types/interfaces";

export const DiscoverPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [pageInfo, setPageInfo] = useState<null | {
    currentPage: number;
    totalPages: number;
  }>(null);

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const seeMovieDetails = (movieId: string) => {
    navigate(`/movie/${movieId}`);
  };

  const [filters, setFilters] = useState<{
    slidersRating: { max: number; min: number };
  }>({
    slidersRating: { max: 10, min: 0 },
  });

  const changeMinRating = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) <= filters.slidersRating.max) {
      setFilters((filters) => ({
        ...filters,
        slidersRating: {
          ...filters.slidersRating,
          min: Number(e.target.value),
        },
      }));
    }
  };

  const changeMaxRating = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) >= filters.slidersRating.min) {
      setFilters((filters) => ({
        ...filters,
        slidersRating: {
          ...filters.slidersRating,
          max: Number(e.target.value),
        },
      }));
    }
  };

  const updateCurrentPage = (newPageNumber: number) => {
    setPageInfo(
      (pageInfo) => ({ ...pageInfo, currentPage: newPageNumber } as any)
    );
  };

  const getAllMovies = async () => {
    setLoading(true);
    const urlString = searchParams.get("search")
      ? `${API_URL}search/movie?query=${searchParams.get("search")}&api_key=${
          process.env.REACT_APP_API_KEY
        }&page=${pageInfo?.currentPage}`
      : `${API_URL}discover/movie?${formatFilterAPIString(filters)}&page=${
          pageInfo?.currentPage || 1
        }&api_key=${process.env.REACT_APP_API_KEY}&include_adult=false`;

    const response = await fetch(urlString);
    const data = await response.json();
    setMovies(data.results);
    setPageInfo({ currentPage: data.page, totalPages: data.total_pages });
    setLoading(false);
  };

  useEffect(() => {
    getAllMovies();
  }, [pageInfo?.currentPage, filters, searchParams]);

  return (
    <div style={{ width: "100%", overflow: "none" }}>
      <div
        className="discover-page-container"
        style={{
          display: "flex",
          width: "80%",
          justifyContent: "space-evenly",
          padding: "1rem",
          gap: "5rem",
        }}
      >
        <Filter
          filters={filters}
          changeMaxRating={changeMaxRating}
          changeMinRating={changeMinRating}
        />
        <div style={{ width: "88%" }}>
          <h4 style={{ fontSize: "30px", color: "white" }}>
            {searchParams.get("search")
              ? `Showing results for: ${searchParams.get("search")}`
              : "Discover"}
          </h4>
          <div style={{ border: "2px solid #AD7D62" }}></div>
          <div style={{ width: "100%" }}>
            {loading ? (
              <div>...loading</div>
            ) : (
              <MoviesList
                movies={movies}
                naviagateToMovieDetails={seeMovieDetails}
              />
            )}
          </div>
        </div>
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <PageChange
          currentPage={pageInfo?.currentPage as number}
          totalPages={pageInfo?.totalPages as number}
          updateCurrentPage={updateCurrentPage}
        />
      </div>
    </div>
  );
};
