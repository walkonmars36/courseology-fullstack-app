import React from "react";
import "./SearchBox.scss";

const SearchBox = ({searchFilter}) => {
  return (
    <div className="search">
      <input className="search__input" type="text" placeholder="Search courses" onChange={searchFilter} />
    </div>
  );
};

export default SearchBox;
