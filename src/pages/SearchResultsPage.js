import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchMovies } from "../actions/index";
import GenresBar from "../components/GenresBar";
import PostersGrid from "../components/PostersGrid";
import Loading from "../components/Loading";
import Error from "../components/Error";

const SearchResultsPage = () => {
  const searchQuery = useSelector((state) => state.searchQuery);
  const loading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error);
  const movies = useSelector((state) => state.movies);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSearchMovies(searchQuery));
  }, [searchQuery]);

  if (loading)
    return (
      <div className="my-flex-container">
        <GenresBar />
        <div className="my-flex-item-posters">
          <div className="d-flex justify-content-center mb-3">
            <h1>Searching "{searchQuery}"</h1>
          </div>
          <Loading />
        </div>
      </div>
    );

  if (error)
    return (
      <div className="my-flex-container">
        <GenresBar />
        <div className="my-flex-item-posters">
          <div className="d-flex justify-content-center mb-3">
            <h1>Searching "{searchQuery}"</h1>
          </div>
          <Error err={error} />
        </div>
      </div>
    );

  return (
    <div className="my-flex-container">
      <GenresBar />
      <div className="my-flex-item-posters">
        <div className="d-flex justify-content-center mb-3">
          <h1>Searching "{searchQuery}"</h1>
        </div>
        <PostersGrid movies={movies} />
      </div>
    </div>
  );
};

export default SearchResultsPage;
