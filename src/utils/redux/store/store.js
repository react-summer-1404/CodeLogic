import { configureStore } from "@reduxjs/toolkit";
import { gmailSlice } from "../slice/gmailSlice";

export const store = configureStore({
  reducer: {
    gmailred: gmailSlice.reducer,
  },
});
