import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteRecipe, getRecipeDetail } from "../redux/actions";
import {
  Frame,
  Recipe,
  RecipeDiets,
  RecipeInfo,
  RecipeTitle,
  HealthScore,
  StyledLink,
  Arrow,
  DeleteButton,
  EditButton,
} from "../styles/StyledCard.styled.js";

const Card = ({ id, title, image, healthScore, diets }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showTags, setShowTags] = useState(false);

  const handleDelete = () => {
    dispatch(deleteRecipe(id));
  };

  const handleEdit = () => {
    dispatch(getRecipeDetail(id, "edit")).then(() => navigate("/new"));
  };

  const handleMouseEnter = () => setShowTags(true);
  const handleMouseLeave = () => setShowTags(false);
  const handleTouch = () => setShowTags((curr) => !curr);

  return (
    <Recipe
      onMouseEnter={handleMouseEnter}
      onTouchStart={handleTouch}
      onMouseLeave={handleMouseLeave}
    >
      <Frame>
        <img src={image} alt={title} />
        {!isFinite(id) && (
          <DeleteButton onClick={handleDelete}>&#10005;</DeleteButton>
        )}
        {!isFinite(id) && <EditButton onClick={handleEdit}>&#9998;</EditButton>}
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
          <Arrow data-showtags={showTags.toString()} />
        </p>
        <RecipeDiets data-showtags={showTags.toString()}>
          {diets &&
            diets.map((diet, index) => <button key={index}>{diet}</button>)}
        </RecipeDiets>
      </RecipeInfo>
    </Recipe>
  );
};

export default Card;
