export const formatMovieForCard = (movie) => {
  let {
    title,
    vote_average: rating,
    overview,
    release_date: year,
    poster_path: image,
    id,
  } = movie;
  overview = overview.length > 210 ? overview.slice(0, 210) + " ..." : overview;
  const newMovie = {
    title,
    rating,
    overview,
    year: year.slice(0, 4),
    image: "https://image.tmdb.org/t/p/w500" + image,
    id,
  };
  return newMovie;
};

export const formatSingleMovieDetails = (details) => {
  let {
    genres,
    title,
    overview,
    poster_path: image,
    production_countries: countries,
    release_date: year,
    runtime,
    vote_average: rating,
    id,
  } = details;
  year = year.slice(0, 4);
  countries = countries
    .splice(0, 3)
    .map((item) => item.name)
    .join(", ");
  genres = genres
    .splice(0, 3)
    .map((item) => item.name)
    .join(", ");

  const trailer = details.results[0].key;
  const casting = details.cast
    .splice(0, 4)
    .map((item) => item.name)
    .join(", ");
  const director = details.crew.find((item) => item.job === "Director").name;

  const movieDetails = {
    genres,
    title,
    overview,
    image,
    countries,
    year,
    runtime,
    rating,
    trailer,
    casting,
    director,
    id,
  };
  return movieDetails;
};
