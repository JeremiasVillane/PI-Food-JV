import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePage, getAllRecipes, getDiets, resetDetail } from "../redux/actions";
import { Cards } from "../components";

const Home = () => {
  const dispatch = useDispatch();
  const {  diets, recipes, currentPage, elementsPerPage, filteredRecipes } = useSelector((state) => state);

  // Traigo las recipes correspondientes a la página actual
  const startIndex = currentPage * elementsPerPage;
  const endIndex = startIndex + elementsPerPage;
  const displayedRecipes = filteredRecipes.slice(startIndex, endIndex);

  useEffect(() => {
    !recipes.length &&
    dispatch(getAllRecipes());
    !diets.length &&
    dispatch(getDiets())
  }, [dispatch]);

  useEffect(() => {
    dispatch(resetDetail());
  }, [dispatch]);

  return (
    <>
      <Cards displayedRecipes={displayedRecipes} />
    </>
  );
};

export default Home;
