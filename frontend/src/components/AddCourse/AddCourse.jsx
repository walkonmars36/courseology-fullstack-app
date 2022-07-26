import {useState} from "react";
import "./AddCourse.scss";

const AddCourse = () => {
  const [course, setCourse] = useState({
    title: "",
    category: "",
    location: "",
    price: "",
    duration: "",
    summary: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:8080/course", {
      method: "POST",
      headers: {"content-Type": "application/json"},
      body: JSON.stringify(course),
    });

    console.log(course);
    event.target.reset();
  };

  return (
    <div className="log-form">
      <h2>Add A New course</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Course Title" onInput={(event) => setCourse({...course, title: event.target.value})} />
        <input type="text" placeholder="Category" onInput={(event) => setCourse({...course, category: event.target.value})} />
        <input type="text" placeholder="Location" onInput={(event) => setCourse({...course, location: event.target.value})} />
        <input type="text" placeholder="Price" onInput={(event) => setCourse({...course, price: event.target.value})} />
        <input type="text" placeholder="Duration" onInput={(event) => setCourse({...course, duration: event.target.value})} />
        <input type="text" placeholder="Summary" onInput={(event) => setCourse({...course, summary: event.target.value})} />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
