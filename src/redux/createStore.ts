import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import names from "./slices/names";
import randomName from "./slices/randomName";
import generateRandomNum from "../utils/generateRandomNum";

const createStore = (api = { generateRandomNum }) => {
  const customizedMiddleware = getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    },
  });

  return configureStore({
    reducer: {
      names,
      randomName,
    },
  });
};

type Store = ReturnType<typeof createStore>;
export type RootState = ReturnType<Store["getState"]>;
export type RootDispatch = Store["dispatch"];

export default createStore;
