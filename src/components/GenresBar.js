import React, { useEffect, useState } from "react";
import SingleGenre from "./SingleGenre";
import axios from "axios";
import { useSelector } from "react-redux";

const GenresBar = () => {
  const allGenres = useSelector((state) => state.allGenres);
  const { genres } = allGenres;
  if (!genres) return;
  return (
    <div className="my-flex-item-genres">
      <div className="container">
        <ul>
          {genres.map((genre) => {
            return (
              <SingleGenre
                {...genre}
                // currentGenre={currentGenre}
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
