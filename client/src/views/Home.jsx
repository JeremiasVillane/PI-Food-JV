import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes, getDiets, resetDetail } from "../redux/actions";
import { Cards } from "../components";

const Home = () => {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);
  const recipes = useSelector((state) => state.recipes);
  const currentPage = useSelector((state) => state.currentPage);
  const elementsPerPage = useSelector((state) => state.elementsPerPage);
  const filteredRecipes = useSelector((state) => state.filteredRecipes);

  // Traigo las recipes correspondientes a la página actual
  const startIndex = currentPage * elementsPerPage;
  const endIndex = startIndex + elementsPerPage;
  const displayedRecipes = filteredRecipes.slice(startIndex, endIndex);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
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
