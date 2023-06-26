// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getAllRecipes, getDiets } from "../redux/actions";
import Card from "./Card";
import Pagination from "./Pagination";

const Cards = ({ displayedRecipes }) => {
  const dispatch = useDispatch();
  // const { diets, recipes } = useSelector((state) => state);
  // const { recipes, filteredRecipes } = useSelector((state) => state);

  return (
    <div>
      <Pagination />
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
      <Pagination />
      {/* {filteredRecipes?.length
        ? filteredRecipes?.map((recipe) => {
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
          })
        : recipes?.map((recipe) => {
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
          })} */}
    </div>
  );
};

export default Cards;
