import { SET_ALERT, SET_LOADING } from "./action-types";

export const setLoading = (isLoading) => {
  return({
    type: SET_LOADING,
    payload: isLoading,
  });
};

export const setAlert = (alert) => {
  return({
    type: SET_ALERT,
    payload: alert,
  });
};
