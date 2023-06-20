import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducer from "./reducer";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: import.meta.env.VITE_NODE_ENV !== "production",
});

export default store;
