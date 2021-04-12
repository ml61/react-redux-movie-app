import React from "react";
import { useSelector } from "react-redux";

const Error = () => {
  const error = useSelector((state) => state.error);
  return (
    <div>
      <h1>Unfortunately. {error}. Try again</h1>
    </div>
  );
};

export default Error;
