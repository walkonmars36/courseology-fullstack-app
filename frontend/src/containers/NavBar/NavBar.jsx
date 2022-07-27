import "./NavBar.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import {Link} from "react-router-dom";

const NavBar = ({searchFilter}) => {
  return (
    <div className="nav">
      <SearchBox searchFilter={searchFilter} />
      <div className="nav__add-course">
        <Link to="/add-course">Add Course</Link>
      </div>
    </div>
  );
};

export default NavBar;
