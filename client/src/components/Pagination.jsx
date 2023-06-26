import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changePage } from '../redux/actions';

const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);
  const totalPages = useSelector(
    (state) =>
      Math.ceil(state.filteredRecipes.length / state.elementsPerPage)
  );

  const handlePageChange = (pageNumber) => {
    dispatch(changePage(pageNumber));
  };

  const generatePageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i - 1)}
          className={currentPage === i - 1 ? 'active' : ''}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div style={{position: "sticky", top: "133px" }}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 0}
      >
        &lt; Prev
      </button>
      {generatePageNumbers()}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages - 1}
      >
        Next &gt;
      </button>
    </div>
  );
};

export default Pagination;
