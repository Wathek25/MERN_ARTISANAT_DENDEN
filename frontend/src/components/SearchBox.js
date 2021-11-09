import React, { useState } from "react";

const SearchBox = (props) => {
  const [nom, setNom] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    props.history.push(`/search/nom/${nom}`);
  };
  return (
    <form className="search" onSubmit={submitHandler}>
      <div>
        <input
          type="text"
          nom="q"
          id="q"
          onChange={(e) => setNom(e.target.value)}
        ></input>
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
