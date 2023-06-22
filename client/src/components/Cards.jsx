import { useSelector } from "react-redux";
import Card from "./Card";

const Cards = () => {
  const recipes = useSelector((state) => state.recipes);
  
  return (
    <div>
      {recipes.map((recipe) => {
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
    </div>
  );
};

export default Cards;
