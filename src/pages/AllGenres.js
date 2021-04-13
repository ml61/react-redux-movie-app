import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

import BasicPagination from "../components/BasicPagination";
import PostersGrid from "../components/PostersGrid";
import GenresBar from "../components/GenresBar";
import Error from "../components/Error";
import Loading from "../components/Loading";

import {
  getMoviesOfGenre,
  changeCurrentPage,
  setCurrentGenreId,
} from "../actions/index";
import { useDispatch, useSelector } from "react-redux";

const AllGenres = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);
  const currentGenreId = useSelector((state) => Number(state.currentGenreId));
  const totalPages = useSelector((state) => state.totalPages);
  const movies = useSelector((state) => state.movies);
  const isLoading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error);

  const history = useHistory();
  let search = window.location.search;
  let params = new URLSearchParams(search);

  const handleChangePage = (e, page) => {
    history.push({
      pathname: `/all-genres/${currentGenreId}`,
      search: "?page=" + page,
    });
    dispatch(changeCurrentPage(page));
  };

  useEffect(() => {
    dispatch(getMoviesOfGenre(id, currentPage));
    dispatch(changeCurrentPage(parseInt(params.get("page"))));
    dispatch(setCurrentGenreId(id));
  }, [id, currentPage]);

  if (isLoading) return <Loading />;
  if (error) return <Error err={error} />;

  return (
    <div className="my-flex-container">
      <GenresBar currentGenreId={currentGenreId} />
      <div className="my-flex-item-posters">
        <div className="d-flex justify-content-center mb-3">
          <BasicPagination
            totalPages={totalPages}
            handleChangePage={handleChangePage}
            currentPage={currentPage}
          />
        </div>
        <PostersGrid movies={movies} />
        <div className="d-flex justify-content-center mb-5">
          <BasicPagination
            totalPages={totalPages}
            handleChangePage={handleChangePage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default AllGenres;
