import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getPopular } from "../actions";
import SliderHome from "../components/SliderHome";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const isLoading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(getPopular());
  }, []);

  if (error) {
    return <Error />;
  }

  if (isLoading || !movies) {
    return <Loading />;
  }

  return (
    <div className="my-container">
      <div className="section-random-movie">
        <h1 className="big-h1">SEARCH FOR YOUR ENTERTAINMENT</h1>
        <h2>Let us to find the best movie for you</h2>
        <Link
          to="/random-movie"
          className="massive ui black button btn-find-now"
        >
          find now
        </Link>
      </div>
      <div className="popular-movies-footer">
        <h3>Popular</h3>
        <SliderHome popularMovies={movies} />
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return { movies: state.movies, isLoading: state.isLoading };
// };

// export default connect(mapStateToProps, { getPopular })(Home);
export default Home;
