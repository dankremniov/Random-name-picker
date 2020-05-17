import { combineReducers } from "@reduxjs/toolkit";
import names from "./slices/names";
import randomName from "./slices/randomName";

const rootReducer = combineReducers({
  names,
  randomName,
});

export default rootReducer;
