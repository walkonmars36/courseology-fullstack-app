import "./CoursesList.scss";
import Course from "../../components/Course/Course";

const Courses = ({courses}) => {
  return (
    <div className="course-list">
      {courses.map((course, index) => (
        <Course key={index} courses={course} />
      ))}
    </div>
  );
};

export default Courses;
