import { combineReducers } from "@reduxjs/toolkit";
import names from "./slices/names";

const rootReducer = combineReducers({
  names,
});

export default rootReducer;
