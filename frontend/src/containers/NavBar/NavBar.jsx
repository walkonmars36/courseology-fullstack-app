import "./NavBar.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import {Link} from "react-router-dom";

const NavBar = ({searchFilter}) => {
  return (
    <div className="nav">
      <h1 className="nav__header">
        <Link to="/">_courseology</Link>
      </h1>
      <SearchBox searchFilter={searchFilter} />
      <Link className="link" to="/add-course">
        Add Course
      </Link>
    </div>
  );
};

export default NavBar;
