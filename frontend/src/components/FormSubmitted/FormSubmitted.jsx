import React from "react";
import "./FormSubmitted.scss";
import {Link} from "react-router-dom";

const FormSubmitted = () => {
  return (
    <div className="form-submitted">
      <h1 className="form-submitted__header">Thank you!</h1>
      <p className="form-submitted__text">Your course has been added</p>

      <Link to={"/all-courses"} className="link">
        Back to courses
      </Link>
    </div>
  );
};

export default FormSubmitted;
