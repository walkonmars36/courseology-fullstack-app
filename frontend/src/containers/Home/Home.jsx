import React from "react";
import Main from "../Main/Main";
import NavBar from "../NavBar/NavBar";
import Splash from "../Splash/Splash";

const Home = ({courses, searchFilter}) => {
  return (
    <div>
      <Splash />
      {/* <NavBar searchFilter={searchFilter} />
      <Main courses={courses} /> */}
    </div>
  );
};

export default Home;
