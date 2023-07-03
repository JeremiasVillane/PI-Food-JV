import { CHANGE_PAGE } from "../actions/action-types";

const initialState = {
  currentPage: 0,
  elementsPerPage: 9,
};

const paginationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_PAGE:
      return { ...state, currentPage: payload };
    default:
      return { ...state };
  }
};

export default paginationReducer;
