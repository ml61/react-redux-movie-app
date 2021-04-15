import React from "react";

const IframeAndPoster = ({ image, trailer }) => {
  return (
    <div className="poster-section-container">
      <img
        className="single-movie-poster"
        src={`https://image.tmdb.org/t/p/w500${image}`}
        alt=""
      />
      {trailer ? (
        <iframe
          src={`https://www.youtube.com/embed/${trailer}`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title={trailer}
        ></iframe>
      ) : (
        <h2>There is no video for this movie </h2>
      )}
    </div>
  );
};

export default IframeAndPoster;
