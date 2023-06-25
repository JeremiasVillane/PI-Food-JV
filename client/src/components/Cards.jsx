import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllRecipes, getDiets } from "../redux/actions";
import Card from "./Card";

const Cards = ({ displayedRecipes, handleNextPage, handlePrevPage }) => {
  const dispatch = useDispatch();
  // const { recipes, filteredRecipes } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllRecipes());
    dispatch(getDiets());
  }, [dispatch]);

  return (
    <div>
      <button onClick={handlePrevPage}>Prev</button>
      <button onClick={handleNextPage}>Next</button>
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
      <button onClick={handlePrevPage}>Prev</button>
      <button onClick={handleNextPage}>Next</button>
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
