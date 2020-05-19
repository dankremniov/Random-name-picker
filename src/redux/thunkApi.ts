import generateUniqueRandom from "../utils/generateUniqueRandom";

const thunkApi = {
  generateUniqueRandom,
};

export type ThunkApi = typeof thunkApi;

export default thunkApi;
