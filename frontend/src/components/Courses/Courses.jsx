import {useState, useEffect} from "react";
import "./Courses.scss";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  const getCourses = async () => {
    const response = await fetch("http://localhost:8080/courses");
    const json = await response.json();
    console.log(json);
    setCourses(json);
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div className="course">
      {courses.map((course) => (
        <div className="course__item">{course.title}</div>
      ))}
    </div>
  );
};

export default Courses;
