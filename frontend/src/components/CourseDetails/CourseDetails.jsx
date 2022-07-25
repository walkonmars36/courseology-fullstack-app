import {useState, useEffect} from "react";
import "./CourseDetails.scss";
import {Link, useParams} from "react-router-dom";

const CourseDetails = () => {
  const [course, setCourse] = useState({});

  const {courseId} = useParams();

  useEffect(() => {
    const fetchCourse = async () => {
      const response = await fetch(`http://localhost:8080/course/${courseId}`);
      const json = await response.json();
      console.log(json);
      setCourse(json);
    };
    fetchCourse();
  }, [courseId, setCourse]);

  return (
    <div className="course-details">
      {course && (
        <div className="course-details__header">
          <h1>{course.title}</h1>
          <p>{course.summary}</p>
        </div>
      )}

      <Link to="/">Back to courses</Link>
    </div>
  );
};

export default CourseDetails;
