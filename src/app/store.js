import { configureStore } from "@reduxjs/toolkit";
import busReducer from "../features/bus/busSlice";

export const store = configureStore({
  reducer: {
    bus: busReducer,
  },
});