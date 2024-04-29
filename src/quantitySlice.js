import { createSlice } from "@reduxjs/toolkit";

const initialState = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

const quantitySlice = createSlice({
  name: "quantity",
  initialState,
  reducers: {
    incrementQty: (state, action) => {
      const { productId } = action.payload;
      state[productId] += 1;
    },

    decrementQty: (state, action) => {
      const { productId } = action.payload;
      if (state[productId] > 1) {
        state[productId]--;
      }
    },
  },
});

export default quantitySlice.reducer;
export const { incrementQty, decrementQty } = quantitySlice.actions;