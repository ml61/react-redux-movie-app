import React, { useState, useEffect } from "react";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllGenres,
  setRandomMovieQueries,
  getRandomMovieId,
} from "../actions";
import { chooseAllGenresId, chooseGenreId } from "../constants";
import { getYears, getRating } from "../helperFunctions";

import SingleFormOption from "../components/SingleFormOption";

const FormRandomMovie = () => {
  const movieYearsOptions = getYears();
  const movieRatingOptions = getRating();

  const dispatch = useDispatch();

  let allGenres = useSelector((state) => {
    if (state) return state.allGenres;
    if (!state) return;
  });

  const onSubmit = (formObj) => {
    dispatch(setRandomMovieQueries(formObj));
    dispatch(getRandomMovieId(formObj));
  };

  useEffect(() => {
    dispatch(getAllGenres());
  }, []);

  let genres;
  if (allGenres) {
    genres = allGenres.genres;
    genres.unshift(
      { name: chooseGenreId, id: chooseGenreId },
      { name: chooseAllGenresId, id: chooseAllGenresId }
    );
  }
  if (!genres) return null;

  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <form
          onSubmit={handleSubmit}
          className="form-inline d-flex justify-content-center align-items-center"
        >
          <div className="select-item mx-2">
            <Field name="genreId">
              {({ input }) => (
                <select
                  className="form-select text-light bg-dark border-0"
                  {...input}
                >
                  {genres.map((genre) => {
                    return (
                      <SingleFormOption option={genre.name} value={genre.id} />
                    );
                  })}
                </select>
              )}
            </Field>
          </div>
          <div className="select-item mx-2">
            <Field name="minYear">
              {({ input }) => (
                <select
                  className="form-select text-light bg-dark border-0"
                  {...input}
                >
                  {movieYearsOptions.map((movieYear) => {
                    return (
                      <SingleFormOption option={movieYear} value={movieYear} />
                    );
                  })}
                </select>
              )}
            </Field>
          </div>
          <div className="select-item mx-2">
            <Field name="minRating">
              {({ input }) => (
                <select
                  className="form-select text-light bg-dark border-0"
                  {...input}
                >
                  {movieRatingOptions.map((movieRatingOption) => {
                    return (
                      <SingleFormOption
                        option={movieRatingOption}
                        value={movieRatingOption}
                      />
                    );
                  })}
                </select>
              )}
            </Field>
          </div>
          <button type="submit" className="btn btn-dark mx-2 p-2">
            Generate random movie
          </button>
        </form>
      )}
    </Form>
  );
};

export default FormRandomMovie;
