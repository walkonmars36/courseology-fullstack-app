import "./CoursesList.scss";
import Course from "../Course/Course";

const Courses = ({courses}) => {
  return (
    <div className="course-list">
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  );
};

export default Courses;
