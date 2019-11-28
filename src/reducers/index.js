import { combineReducers } from "redux";

import { default as todo } from "./todo";
import { default as filter } from "./filter";

const reducer = combineReducers({
  todo,
  filter
});

export default reducer;
