import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "../reducers";


const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    });
    return middleware.concat(thunk);
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;