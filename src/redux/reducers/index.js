import { combineReducers } from "redux";
import products from "./products";
import recipes from "./recipes";

export const rootReducer = combineReducers({
  products,
  recipes,
});
