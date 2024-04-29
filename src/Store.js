import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import quantityReducer from "./quantitySlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    quantity: quantityReducer,
  },
});