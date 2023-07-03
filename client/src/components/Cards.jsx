import { PaginationContainer, RecipeContainer } from "../styles/StyledCards.styled";
import Card from "./Card";
import Pagination from "./Pagination";

const Cards = ({ displayedRecipes }) => {
  return (
    <RecipeContainer>
      <PaginationContainer>
        <Pagination />
      </PaginationContainer>
      {displayedRecipes.map((recipe) => {
        const { id, title, image, diets, healthScore } = recipe;
        return (
          <Card
            id={id}
            key={id}
            title={title}
            image={image}
            diets={diets}
            healthScore={healthScore}
          />
        );
      })}
      <PaginationContainer>
        <Pagination />
      </PaginationContainer>
    </RecipeContainer>
  );
};

export default Cards;
