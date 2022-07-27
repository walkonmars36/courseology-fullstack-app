import React from "react";
import "./Splash.scss";
import {Link} from "react-router-dom";

const Splash = () => {
  return (
    <div className="splash">
      <h2 className="splash__welcome">Welcome to ... </h2>
      <h1 className="splash__heading">_courseology</h1>
      <Link className="link splash__link" to="/all-courses">
        View All Courses
      </Link>
    </div>
  );
};

export default Splash;
