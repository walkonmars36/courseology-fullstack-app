import {useState} from "react";
import "./NavBar.scss";
import SearchBox from "../../components/SearchBox/SearchBox";

const NavBar = ({searchFilter}) => {
  return (
    <div>
      <SearchBox searchFilter={searchFilter} />
    </div>
  );
};

export default NavBar;
