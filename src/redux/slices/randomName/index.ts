import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, RootDispatch } from "../../createStore";

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

export const pickRandom = () => (
  state: RootState,
  dispatch: RootDispatch
) => {

};

export const selectName = (state: RootState) => {
  return state.randomName;
};

export default reducer;
