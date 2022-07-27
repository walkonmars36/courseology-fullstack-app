import {useState} from "react";
import "./AddCourse.scss";
import {Link, useNavigate} from "react-router-dom";

const AddCourse = () => {
  const [course, setCourse] = useState({
    title: "",
    category: "",
    location: "",
    price: "",
    duration: "",
    summary: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (course.title !== "" && course.category !== "" && course.location !== "" && course.price !== "" && course.duration !== "" && course.summary !== "") {
      event.target.reset();
      navigate("/form-submitted");
    } else {
      alert("Please fill in all fields");
    }

    await fetch("http://localhost:8080/course", {
      method: "POST",
      headers: {"content-Type": "application/json"},
      body: JSON.stringify(course),
    });
  };

  return (
    <div className="add-course">
      <h2 className="add-course__header">Add A New Course</h2>
      <form className="add-course__form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Course Title" onInput={(event) => setCourse({...course, title: event.target.value})} />
        <input type="text" placeholder="Category" onInput={(event) => setCourse({...course, category: event.target.value})} />
        <input type="text" placeholder="Location" onInput={(event) => setCourse({...course, location: event.target.value})} />
        <input type="text" placeholder="Price" onInput={(event) => setCourse({...course, price: event.target.value})} />
        <input type="text" placeholder="Duration" onInput={(event) => setCourse({...course, duration: event.target.value})} />
        <input type="text" placeholder="Summary" onInput={(event) => setCourse({...course, summary: event.target.value})} />
        <button type="submit" className="link submit-btn">
          Submit
        </button>
      </form>
      <Link className="link" to="/all-courses">
        Back to All Courses
      </Link>
    </div>
  );
};

export default AddCourse;
