import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changePage } from "../redux/actions";
import { StyledPagination, PaginationButton } from "../styles/StyledPagination.styled";

const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);
  const totalPages = useSelector((state) =>
    Math.ceil(state.filteredRecipes.length / state.elementsPerPage)
  );

  const handlePageChange = (pageNumber) => {
    dispatch(changePage(pageNumber));
    window.scrollTo(0, 0);
  };

  const generatePageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <PaginationButton
          key={i}
          onClick={() => handlePageChange(i - 1)}
          is-active={(currentPage === i - 1).toString()}
        >
          {i}
        </PaginationButton>
      );
    }
    return pageNumbers;
  };

  return (
    <StyledPagination>
      <PaginationButton
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 0}
      >
        &lt; Prev
      </PaginationButton>
      {generatePageNumbers()}
      <PaginationButton
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages - 1}
      >
        Next &gt;
      </PaginationButton>
    </StyledPagination>
  );
};

export default Pagination;
