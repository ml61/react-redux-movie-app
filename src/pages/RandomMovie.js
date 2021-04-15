import React, { useState, useEffect } from "react";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { getAllGenres } from "../actions";
import { chooseAllGenresId, chooseGenreId } from "../constants";
import { getYears, getRating } from "../helperFunctions";
import FormRandomMovie from "../components/FormRandomMovie";
import SingleMovieContainer from "../components/SingleMovieContainer";

const RandomMovie = () => {
  const randomMovieId = useSelector((state) => state.randomMovieId);
  return (
    <>
      <FormRandomMovie />
      <div className="flex-container-movie">
        {/* <GenresBar currentGenre={currentGenre} handleGenre={handleGenre} /> */}

        <SingleMovieContainer movieId={randomMovieId} />
      </div>
    </>
  );
};

export default RandomMovie;
