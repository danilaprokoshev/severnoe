import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./dataSlice";

export const store = configureStore({
  reducer: {
    data: counterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
