import React from "react";
import "./CourseDetails.scss";
import {Link, useParams} from "react-router-dom";

const CourseDetails = ({courses}) => {
  const {id, title, summary} = courses;

  const {courseId} = useParams();

  return (
    <div className="course-details">
      <h2 className="course-details__header">{title}</h2>
      <p>{summary}</p>

      <Link to="/">Back to courses</Link>
    </div>
  );
};

export default CourseDetails;
