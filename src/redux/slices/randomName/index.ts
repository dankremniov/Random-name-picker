import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, RootDispatch, GetRootState } from "../../createStore";
import { ThunkApi } from "../../thunkApi";
import { selectNames, selectNameByIndex } from "../names";

type SliceState = string | null;

const namesSlice = createSlice({
  name: "randomName",
  initialState: null as SliceState,
  reducers: {
    setName(state, action: PayloadAction<string | null>) {
      return action.payload;
    },
  },
});

const { actions, reducer } = namesSlice;

export const { setName } = actions;

export const selectName = (state: RootState) => {
  return state.randomName;
};

export const pickRandomName = () => (
  dispatch: RootDispatch,
  getState: GetRootState,
  api: ThunkApi
) => {
  const state = getState();
  const names = selectNames(state);

  if (names.length < 2) {
    return;
  }

  const currentName = selectName(state);
  const previousIndex = names.findIndex((n) => n === currentName);

  const randomIndex = api.generateRandomNum(names.length - 1, previousIndex);

  dispatch(setName(selectNameByIndex(state, randomIndex) || null));
};

export default reducer;
