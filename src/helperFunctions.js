import {
  chooseAllGenresId,
  api_key,
  RandomMovieMinVoteCount,
} from "./constants";
import api from "./apis/axiosFetch";

export const formatMovieForCard = (movie) => {
  let {
    title,
    vote_average: rating,
    overview,
    release_date: year,
    poster_path: image,
    id,
  } = movie;
  if (overview)
    overview =
      overview.length > 210 ? overview.slice(0, 210) + " ..." : overview;

  year = year ? year.slice(0, 4) : "No data";
  const newMovie = {
    title,
    rating,
    overview,
    year,
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

  year = year ? year.slice(0, 4) : "No data";
  countries = countries
    .splice(0, 3)
    .map((item) => item.name)
    .join(", ");

  genres = genres
    .splice(0, 3)
    .map((item) => item?.name)
    .join(", ");

  const trailer = details.results[0]?.key;
  const casting = details.cast
    .splice(0, 4)
    .map((item) => item?.name)
    .join(", ");
  const director = details.crew.find((item) => item.job === "Director")?.name;

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

export const getYears = () => {
  let movieYears = [];
  for (let i = new Date().getFullYear(); i > 1979; i--) {
    movieYears.push(i);
  }
  movieYears.unshift("Year not earlier than");
  return movieYears;
};

export const getRating = () => {
  let ratingValues = [];
  for (let i = 8.5; i > 6; i -= 0.5) {
    ratingValues.push(i);
  }
  ratingValues.unshift("Choose min rating");
  return ratingValues;
};

export const getRandomMovieList = (minYear, minRating, genreId, page = 1) => {
  let requestParams;
  if (genreId !== chooseAllGenresId) {
    requestParams = {
      api_key,
      with_genres: genreId,
      "vote_average.gte": minRating,
      "primary_release_date.gte": minYear + "-01-01",
      "vote_count.gte": RandomMovieMinVoteCount,
      page: page,
    };
  } else {
    requestParams = {
      api_key,
      "vote_average.gte": minRating,
      "primary_release_date.gte": minYear + "-01-01",
      "vote_count.gte": RandomMovieMinVoteCount,
      page: page,
    };
  }
  return api.get("/discover/movie", {
    params: requestParams,
  });
};

export const getMovieRandomResultPosition = (totalResults) => {
  let randomResultPosition = Math.floor(Math.random() * totalResults);
  let pageNumber = Math.floor(randomResultPosition / 20 + 1);
  let moviePositionOnPage = randomResultPosition - (pageNumber - 1) * 20;
  return { pageNumber, moviePositionOnPage };
};
