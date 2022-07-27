import React from "react";
import "./Course.scss";
import {Link} from "react-router-dom";

const Course = ({courses}) => {
  const {id, title, category, location, price, duration} = courses;

  return (
    <div className="course-card">
      <h2 className="course-card__header">{title}</h2>
      <div className="course-card__content">
        <p>Course duration: {duration}</p>
        <p>Price {price}</p>
        <p>Location: {location}</p>
        <p>Category: {category}</p>
      </div>
      <Link className="link course-card__link" to={`/course/${id}`}>
        Learn More
      </Link>
    </div>
  );
};

export default Course;
