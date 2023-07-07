import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes, getDiets } from "../redux/actions";
import { Cards, Loader } from "../components";

const Home = () => {
  const dispatch = useDispatch();
  const {diets, recipes, filteredRecipes} = useSelector((state) => state.recipes);
  const {currentPage, elementsPerPage} = useSelector((state) => state.pagination);
  const { isLoading } = useSelector((state) => state.ui);

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

  return (
    <>
      {isLoading && <Loader />}
      <Cards displayedRecipes={displayedRecipes} />
    </>
  );
};

export default Home;
