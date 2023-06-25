import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePage, resetDetail } from "../redux/actions";
import { Cards } from "../components";

const Home = () => {
  const dispatch = useDispatch();
  const { currentPage, elementsPerPage, filteredRecipes } = useSelector((state) => state);

  // Traigo las recipes correspondientes a la página actual
  const startIndex = currentPage * elementsPerPage;
  const endIndex = startIndex + elementsPerPage;
  const displayedRecipes = filteredRecipes.slice(startIndex, endIndex);

  // handlers para el cambio de página
  const handleNextPage = () => {
    const totalPages = Math.ceil(filteredRecipes.length / elementsPerPage);
    if (currentPage < totalPages - 1) {
      dispatch(changePage(currentPage + 1));
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      dispatch(changePage(currentPage - 1));
    }
  };

  useEffect(() => {
    dispatch(resetDetail());
  }, [dispatch]);

  return (
    <>
      <h1>Home</h1>
      <Cards displayedRecipes={displayedRecipes} handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} />
    </>
  );
};

export default Home;
