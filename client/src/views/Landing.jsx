import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllRecipes, getDiets } from "../redux/actions";
import { Button } from "../styles/common/Button";
import { LandingWrapper } from "../styles/StyledLanding.styled";

const Landing = () => {
  const dispatch = useDispatch();
  const { diets, recipes } = useSelector((state) => state.recipes);

  useEffect(() => {
    !recipes.length && dispatch(getAllRecipes());
    !diets.length && dispatch(getDiets());
  }, [dispatch]);
  return (
    <LandingWrapper>
      <h1>Welcome to...</h1>
      <img src="../src/assets/foodworld-logo.png" alt="Food World" />
      <Link to="/home">
        <Button kind="primary">ENTER</Button>
      </Link>
    </LandingWrapper>
  );
};

export default Landing;
