import { combineReducers } from "redux";
import UserReducer from "./reducer.js";

export const reducer = combineReducers({
  user: UserReducer,
});

export type RootState = ReturnType<typeof reducer>;
