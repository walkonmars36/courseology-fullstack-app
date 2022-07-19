import React from "react";
import "./Course.scss";

const Course = ({course}) => {
  const {title, category, location, price, duration, summary} = course;

  return (
    <div className="course-card">
      <h2 className="course-card__header">{title}</h2>
      <p>{summary}</p>
      <p>Course duration: {duration}</p>
      <p>Price {price}</p>
      <p>Location: {location}</p>
      <p>Category: {category}</p>
    </div>
  );
};

export default Course;
