import {useState, useEffect} from "react";
import "./App.scss";
import CoursesList from "./containers/CoursesList/CoursesList";
import Main from "./containers/Main/Main";
import NavBar from "./containers/NavBar/NavBar";

function App() {
  const [courses, setCourses] = useState([]);
  const [searchCourses, setSearchCourses] = useState([]);

  const getCourses = async () => {
    const response = await fetch("http://localhost:8080/courses");
    const json = await response.json();
    console.log(json);
    setCourses(json);
    setSearchCourses(json);
  };

  useEffect(() => {
    getCourses();
  }, []);

  const searchFilter = (event) => {
    if (event.target.value) {
      const searchTerm = event.target.value.toLowerCase();
      const filteredCourses = courses.filter((course) => course.title.toLowerCase().includes(searchTerm));

      setSearchCourses(filteredCourses);
    } else {
      setSearchCourses(courses);
    }
  };

  return (
    <div className="app__content">
      <NavBar searchFilter={searchFilter} />
      <Main courses={searchCourses} />
    </div>
  );
}

export default App;
