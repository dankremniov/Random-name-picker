import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import names from "./slices/names";
import randomName from "./slices/randomName";
import thunkApi from "./thunkApi";

const createStore = (api = thunkApi) => {
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
    middleware: customizedMiddleware,
  });
};

type Store = ReturnType<typeof createStore>;
export type GetRootState = Store["getState"];
export type RootState = ReturnType<GetRootState>;
export type RootDispatch = Store["dispatch"];

export default createStore;
