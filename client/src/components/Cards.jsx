import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes, getDiets } from "../redux/actions";
import Card from "./Card";

const Cards = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRecipes());
    dispatch(getDiets());
  }, [dispatch]);
  
  const recipes = useSelector((state) => state.recipes);
  const filter = useSelector((state) => state.filter);

  return (
    <div>
      {filter.length
        ? filter.map((recipe) => {
            const { id, title, image, diets, healthScore } = recipe;

            return (
              <Card
                id={id}
                key={id}
                title={title}
                image={image}
                diets={diets}
                healthScore={healthScore}
                // handleDiet={handleDiet}
              />
            );
          })
        : recipes.map((recipe) => {
            const { id, title, image, diets, healthScore } = recipe;

            return (
              <Card
                id={id}
                key={id}
                title={title}
                image={image}
                diets={diets}
                healthScore={healthScore}
                // handleDiet={handleDiet}
              />
            );
          })}
    </div>
  );
};

export default Cards;
