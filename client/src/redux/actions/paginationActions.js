import { CHANGE_PAGE } from "./action-types";

export const changePage = (pageNumber) => ({
  type: CHANGE_PAGE,
  payload: pageNumber,
});