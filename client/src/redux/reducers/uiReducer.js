import { SET_ALERT, SET_LOADING } from "../actions/action-types";

const uiInitialState = {
  isLoading: false,
  alert: null,
};

const uiReducer = (state = uiInitialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case SET_ALERT:
      return {
        ...state,
        alert: payload,
      };
    default:
      return state;
  }
};

export default uiReducer;