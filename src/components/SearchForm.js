import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { setSearchQuery } from "../actions/index";
import { useDispatch } from "react-redux";

const SearchForm = () => {
  const history = useHistory();
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const handleSearchSubmit = (e, inputValue) => {
    dispatch(setSearchQuery(inputValue));
    setInputValue("");
    e.preventDefault();
    history.push({
      pathname: `/search`,
      search: "?query=" + inputValue,
    });
  };

  return (
    <form onSubmit={(e) => handleSearchSubmit(e, inputValue)}>
      <div className="ui icon input input-dark">
        <input
          type="text"
          placeholder="Search..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <i className="search icon"></i>
      </div>
    </form>
  );
};

export default SearchForm;
