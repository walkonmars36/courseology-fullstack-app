import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Main/Main";
import CourseDetails from "../../components/CourseDetails/CourseDetails";
import AddCourse from "../../components/AddCourse/AddCourse";
import FormSubmitted from "../../components/FormSubmitted/FormSubmitted";

const Routing = ({courses, searchFilter}) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/all-courses" element={<Main courses={courses} searchFilter={searchFilter} />} />;
        <Route path="/course/:courseId" element={<CourseDetails courses={courses} />} />;
        <Route path="/add-course" element={<AddCourse />} />;
        <Route path="/form-submitted" element={<FormSubmitted />} />;
      </Routes>
    </Router>
  );
};

export default Routing;
