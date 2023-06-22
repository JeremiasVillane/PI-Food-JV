import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to="/home">HOME</Link>
      <Link to="/new">NEW RECIPE</Link>
      <Link to="/about">ABOUT</Link>
      <hr />
    </div>
  );
};

export default NavBar;
