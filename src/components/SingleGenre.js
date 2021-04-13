import React from "react";
import { Link } from "react-router-dom";

const SingleGenre = ({ name: genreName, id: genreId, currentGenreId }) => {
  return (
    <li>
      <div className="row">
        <Link to={`/all-genres/${genreId}?page=1`}>
          <div
            className={`col genre-name-text border-hover p-0.5 px-4 bg-dark ${
              currentGenreId === genreId ? "genre-name-text-active" : ""
            } `}
          >
            {genreName}
          </div>
        </Link>
      </div>
    </li>
  );
};

export default SingleGenre;
