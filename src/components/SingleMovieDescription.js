import React from "react";

const SingleMovieDescription = ({
  title,
  overview,
  rating,
  countries,
  year,
  runtime,
  casting,
  director,
  genres,
}) => {
  return (
    <>
      <h2 className="single-movie-header">{title ? title : "No Data"}</h2>
      <div className="info-table-movie mb-2">
        <div className="container">
          <div className="row">
            <div className="col-3 genre-name-text p-1 px-2 bg-dark d-flex flex-row-reverse">
              Runtime
            </div>
            <div className="col genre-name-text p-1 px-2 bg-dark">
              {runtime ? runtime : "No Data"} min
            </div>
          </div>
          <div className="row">
            <div className="col-3 genre-name-text p-1 px-2 bg-dark d-flex flex-row-reverse">
              Released
            </div>
            <div className="col genre-name-text p-1 px-2 bg-dark">
              {year ? year : "No Data"}
            </div>
          </div>
          <div className="row">
            <div className="col-3 genre-name-text p-1 px-2 bg-dark d-flex flex-row-reverse">
              Genres
            </div>
            <div className="col genre-name-text p-1 px-2 bg-dark">
              {genres ? genres : "No Data"}
            </div>
          </div>
          <div className="row">
            <div className="col-3 genre-name-text p-1 px-2 bg-dark d-flex flex-row-reverse">
              Director
            </div>
            <div className="col genre-name-text p-1 px-2 bg-dark">
              {director ? director : "No Data"}
            </div>
          </div>
          <div className="row">
            <div className="col-3 genre-name-text p-1 px-2 bg-dark d-flex flex-row-reverse">
              Casting
            </div>
            <div className="col genre-name-text p-1 px-2 bg-dark">
              {casting ? casting : "No Data"}
            </div>
          </div>
          <div className="row">
            <div className="col-3 genre-name-text p-1 px-2 bg-dark d-flex flex-row-reverse">
              Country
            </div>
            <div className="col genre-name-text p-1 px-2 bg-dark">
              {countries ? countries : "No Data"}
            </div>
          </div>

          <div className="row">
            <div className="col-3 genre-name-text p-1 px-2 bg-dark d-flex flex-row-reverse">
              TMDB rate
            </div>
            <div className="col genre-name-text p-1 px-2 bg-dark">
              {rating ? rating : "No Data"}
            </div>
          </div>
        </div>
      </div>
      <p className="description">{overview ? overview : "No Data"}</p>
    </>
  );
};

export default SingleMovieDescription;
