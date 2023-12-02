import { combineReducers } from "redux";
import UserReducer from "./reducer.js";

export default combineReducers({
  user: UserReducer,
});

