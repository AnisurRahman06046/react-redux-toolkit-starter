import { createSlice } from "@reduxjs/toolkit";
// steps to create slice:
/**
 * initialize the state
 * create a slice using createSlice from redux toolkit
 * the createSlice takes an object where:
 * name,iniitalState and reduces
 * reducers takes an object where different types of actions are created
 * finally export the actions and the reducer from the slice
 */
const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
