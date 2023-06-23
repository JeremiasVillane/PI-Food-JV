import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <div>
      <Link to="/home">HOME</Link>
      <Link to="/new">NEW RECIPE</Link>
      <Link to="/about">ABOUT</Link>
      <SearchBar />
      <hr />
    </div>
  );
};

export default NavBar;
