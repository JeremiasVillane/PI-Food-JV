import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducer from "./reducer";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware({
      immutableCheck: false,    // Desactiva la verificación de inmutabilidad del estado
      serializableCheck: false, // Desactiva la verificación de serialización de las acciones
    });
    return middleware.concat(thunk);
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
