import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../Home/Home";
import CourseDetails from "../../components/CourseDetails/CourseDetails";
import PostCourse from "../../components/AddCourse/AddCourse";

import React from "react";

const Routing = ({courses, searchFilter}) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home courses={courses} searchFilter={searchFilter} />} />;
        <Route path="/course/:courseId" element={<CourseDetails courses={courses} />} />;
        <Route path="/add-course" element={<PostCourse />} />;
      </Routes>
    </Router>
  );
};

export default Routing;
