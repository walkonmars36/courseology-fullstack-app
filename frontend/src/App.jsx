import {useState, useEffect} from "react";
import Routing from "./containers/Routing/Routing";
import "./App.scss";

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

      const filteredCourses = courses.filter((course) => Object.keys(course).some((key) => course[key].toLowerCase().includes(searchTerm)));

      setSearchCourses(filteredCourses);
    } else {
      setSearchCourses(courses);
    }
  };

  return (
    <div className="app__content">
      <Routing courses={searchCourses} searchFilter={searchFilter} />
    </div>
  );
}

export default App;
