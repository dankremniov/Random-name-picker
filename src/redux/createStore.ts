import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const createStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type RootState = ReturnType<typeof rootReducer>;

export default createStore;
