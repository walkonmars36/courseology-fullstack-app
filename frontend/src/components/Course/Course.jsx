import React from "react";
import "./Course.scss";
import {Link} from "react-router-dom";

const Course = ({courses}) => {
  const {id, title, category, location, price, duration, summary} = courses;

  return (
    <div className="course-card">
      <h2 className="course-card__header">{title}</h2>
      <p>Course duration: {duration}</p>
      <p>Price {price}</p>
      <p>Location: {location}</p>
      <p>Category: {category}</p>
      <Link className="link" to={`/course/${id}`}>
        Learn More
      </Link>
    </div>
  );
};

export default Course;
