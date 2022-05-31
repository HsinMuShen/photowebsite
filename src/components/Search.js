import React from "react";

const Search = ({ search, setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="search">
      <input onChange={inputHandler} type="text"></input>
      <button onClick={search}>Search</button>
    </div>
  );
};

export default Search;
