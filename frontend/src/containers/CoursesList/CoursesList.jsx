import "./CoursesList.scss";
import Course from "../../components/Course/Course";
import {useState, useEffect} from "react";
import CourseDetails from "../../components/CourseDetails/CourseDetails";

const Courses = ({courses}) => {
  const [selectedCourse, setSelectedCourse] = useState({});

  const getCourseOverview = async () => {
    const response = await fetch(`http://localhost:8080/course/2`);
    const json = await response.json();
    console.log(json);

    setSelectedCourse(json);
  };

  useEffect(() => {
    getCourseOverview();
  }, []);

  return (
    <div className="course-list">
      {courses.map((course, index) => (
        <Course key={index} course={course} onClick={getCourseOverview} />
      ))}
    </div>
  );
};

export default Courses;
