import React, { useEffect } from "react";
import SingleGenre from "./SingleGenre";

import { useDispatch, useSelector } from "react-redux";
import { getAllGenres } from "../actions";

const GenresBar = ({ currentGenreId }) => {
  const dispatch = useDispatch();
  let allGenres = useSelector((state) => {
    if (state) return state.allGenres;
    if (!state) return;
  });

  useEffect(() => {
    dispatch(getAllGenres());
  }, []);

  let genres;
  if (allGenres) {
    genres = allGenres.genres;
  }
  if (!genres) return null;

  return (
    <div className="my-flex-item-genres">
      <div className="container">
        <ul>
          {genres.map((genre) => {
            return (
              <SingleGenre
                {...genre}
                currentGenreId={currentGenreId}
                key={genre.id}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default GenresBar;
