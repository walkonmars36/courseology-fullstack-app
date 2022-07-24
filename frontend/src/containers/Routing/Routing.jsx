import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../Home/Home";

import React from "react";

const Routing = ({courses, searchFilter}) => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home courses={courses} searchFilter={searchFilter} />} />;
      </Routes>
    </Router>
  );
};

export default Routing;
