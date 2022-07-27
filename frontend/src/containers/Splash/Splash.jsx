import React from "react";
import "./Splash.scss";
import {Link} from "react-router-dom";

const Splash = () => {
  return (
    <div>
      Splash
      <Link to="/all-courses">All Courses</Link>
    </div>
  );
};

export default Splash;
