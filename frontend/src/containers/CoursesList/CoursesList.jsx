import "./CoursesList.scss";
import Course from "../../components/Course/Course";
import {useState} from "react";

const Courses = ({courses}) => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const showCourseOverview = (e) => {
    const courseId = e.target.id;
    setSelectedCourse(courseId);
    console.log(courseId);
  };

  return (
    <div className="course-list">
      {courses.map((course, index) => (
        <Course key={index} course={course} onClick={showCourseOverview} />
      ))}
    </div>
  );
};

export default Courses;
