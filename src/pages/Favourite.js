import React from "react";
import { useSelector } from "react-redux";
import GenresBar from "../components/GenresBar";
import PostersGrid from "../components/PostersGrid";

const Favourite = () => {
  const favouriteMovies = useSelector((state) => state.favouriteMovies);

  const newFavouriteMovies = favouriteMovies.map((item) => {
    let { title, rating, overview, year, image, id } = item;
    overview =
      overview.length > 210 ? overview.slice(0, 210) + " ..." : overview;
    const newItem = {
      title,
      rating,
      overview,
      year: year.slice(0, 4),
      image: "https://image.tmdb.org/t/p/w500" + image,
      id,
    };
    return newItem;
  });

  return (
    <div className="my-flex-container">
      <GenresBar />
      <div className="my-flex-item-posters">
        <div className="d-flex justify-content-center mb-3">
          <h1>Favourite Movies</h1>
        </div>
        <PostersGrid movies={newFavouriteMovies} />
      </div>
    </div>
  );
};

export default Favourite;
