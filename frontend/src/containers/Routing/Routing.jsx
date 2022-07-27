import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../Home/Home";
import CourseDetails from "../../components/CourseDetails/CourseDetails";
import AddCourse from "../../components/AddCourse/AddCourse";

import React from "react";
import Main from "../Main/Main";

const Routing = ({courses, searchFilter}) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/all-courses" element={<Main courses={courses} searchFilter={searchFilter} />} />;
        <Route path="/course/:courseId" element={<CourseDetails courses={courses} />} />;
        <Route path="/add-course" element={<AddCourse />} />;
      </Routes>
    </Router>
  );
};

export default Routing;
