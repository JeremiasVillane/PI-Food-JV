import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <div>
      <NavLink to="/home">HOME</NavLink>
      <NavLink to="/new">NEW RECIPE</NavLink>
      <NavLink to="/about">ABOUT</NavLink>
      <SearchBar />
      <hr />
    </div>
  );
};

export default NavBar;
