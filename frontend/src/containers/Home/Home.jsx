import React from "react";
import Main from "../Main/Main";
import NavBar from "../NavBar/NavBar";

const Home = ({courses, searchFilter}) => {
  return (
    <div>
      <NavBar searchFilter={searchFilter} />
      <Main courses={courses} />
    </div>
  );
};

export default Home;
