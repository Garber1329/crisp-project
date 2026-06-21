import { configureStore } from "@reduxjs/toolkit";
import exampleReducer from "./slices/exampleSlice";
import productReducer from "./slices/productsSlice";

const store = configureStore({
  reducer: {
    example: exampleReducer,
    products: productReducer,
  },
});

export default store;
