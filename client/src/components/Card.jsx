import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { filtering } from "../redux/actions";
import { Frame, Recipe, RecipeDiets, RecipeInfo, RecipeTitle, HealthScore, StyledLink, Arrow } from "../styles/Recipe.styled";

const Card = ({ id, title, image, healthScore, diets }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [showTags, setShowTags] = useState(false);

  const handlefilter = (event) => {
    const { textContent } = event.target;
    const filters = {
      search: "",
      source: "",
      diets: { ...diets, [textContent]: true },
    };
    dispatch(filtering(filters));
    if (pathname !== "/home") {
      navigate("/home");
    }
  };

  const handleMouseEnter = () => setShowTags(true);
  const handleMouseLeave = () => setShowTags(false);
  const handleTouch = () => setShowTags((curr) => !curr);

  return (
    <Recipe onMouseEnter={handleMouseEnter} onTouchStart={handleTouch} onMouseLeave={handleMouseLeave}>
      <Frame>
        <img src={image} alt={title} />
        <HealthScore>{healthScore}</HealthScore>
      </Frame>
      <RecipeInfo>
        <RecipeTitle>
          <StyledLink to={`/detail/${id}`}>
            <h3>{title}</h3>
          </StyledLink>
        </RecipeTitle>
        <p>
          Related diets 
          {<Arrow data-showtags={showTags ? "true" : "false"} />}
        </p>
        <RecipeDiets data-showtags={showTags ? "true" : "false"}>
          {diets &&
            diets.map((diet, index) => (
              <button key={index} onClick={handlefilter}>
                {diet}
              </button>
            ))}
        </RecipeDiets>
      </RecipeInfo>
    </Recipe>
  );
};

export default Card;
