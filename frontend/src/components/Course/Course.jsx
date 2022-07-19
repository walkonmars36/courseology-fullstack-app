import React from "react";

const Course = ({course}) => {
  const {id, title, category, location, price, duration, summary} = course;

  return (
    <div>
      <h2>{title}</h2>
      <p>{summary}</p>
      <p>{duration}</p>
      <p>{price}</p>
      <p>{location}</p>
      <p>{category}</p>
    </div>
  );
};

export default Course;
