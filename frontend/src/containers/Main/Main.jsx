import React from "react";
import "./Main.scss";
import CoursesList from "../CoursesList/CoursesList";
import NavBar from "../NavBar/NavBar";

const Main = ({courses, searchFilter}) => {
  return (
    <div className="main">
      <NavBar searchFilter={searchFilter} />
      <CoursesList courses={courses} />
    </div>
  );
};

export default Main;
