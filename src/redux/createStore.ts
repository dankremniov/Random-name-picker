import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const a = () => 1;

const createStore = (api = { generateRandomNum: a }) => {
  const customizedMiddleware = getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    },
  });

  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type RootDispatch = ReturnType<typeof configureStore>["dispatch"];

export default createStore;
