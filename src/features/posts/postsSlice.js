import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  post: [
    {
      id: 1,
      title: "Learning Redux Toolkit",
      content: "I've heard good things",
    },
    {
      id: 2,
      title: "Slices...",
      content: "The more I say slices, the more I say pizza",
    },
  ],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
});
