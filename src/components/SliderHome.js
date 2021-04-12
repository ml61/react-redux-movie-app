import React, { useState } from "react";
import SinglePoster from "./SinglePoster";
import Error from "./Error";
import Loading from "./Loading";

// import Loading from "../components/Loading";
// import Error from "./Error";
import { useSelector } from "react-redux";

const SliderHome = ({ popularMovies }) => {
  const [numberPage, setNumberPage] = useState(1);

  const { isLoading } = useSelector((state) => state.isLoading);
  const { error } = useSelector((state) => state.error);

  const nextPage = () => {
    if (numberPage < 4) {
      setNumberPage(numberPage + 1);
    }
    if (numberPage >= 4) {
      setNumberPage(1);
    }
  };
  const prevPage = () => {
    if (numberPage > 1) {
      setNumberPage(numberPage - 1);
    }
    if (numberPage <= 1) {
      setNumberPage(4);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className="popular-flex-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        className="bi bi-arrow-left-circle slider-btn"
        viewBox="0 0 16 16"
        onClick={prevPage}
      >
        <path
          fillRule="evenodd"
          d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
        />
      </svg>
      {popularMovies
        .slice((0 + numberPage - 1) * 5, 5 * numberPage)
        .map((item) => {
          return <SinglePoster {...item} key={item.id} />;
        })}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        className="bi bi-arrow-right-circle slider-btn"
        viewBox="0 0 16 16"
        onClick={nextPage}
      >
        <path
          fillRule="evenodd"
          d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
        />
      </svg>
    </div>
  );
};

export default SliderHome;
