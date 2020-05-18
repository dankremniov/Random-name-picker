import generateRandomNum from "../utils/generateRandomNum";

const thunkApi = {
  generateRandomNum,
};

export type ThunkApi = typeof thunkApi;

export default thunkApi;
