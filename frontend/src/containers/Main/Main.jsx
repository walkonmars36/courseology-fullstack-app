import React from "react";
import "./Main.scss";
import CoursesList from "../CoursesList/CoursesList";

const Main = ({courses}) => {
  return (
    <div>
      <CoursesList courses={courses} />
    </div>
  );
};

export default Main;
