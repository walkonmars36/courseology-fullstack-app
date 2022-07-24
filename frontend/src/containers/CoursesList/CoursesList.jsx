import "./CoursesList.scss";
import Course from "../../components/Course/Course";
import {useState, useEffect} from "react";
import CourseDetails from "../../components/CourseDetails/CourseDetails";

const Courses = ({courses}) => {
  const [selectedCourse, setSelectedCourse] = useState({});

  return (
    <div className="course-list">
      {courses.map((course, id) => (
        <Course key={id} course={course} />
      ))}
    </div>
  );
};

export default Courses;
