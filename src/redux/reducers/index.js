import { combineReducers } from "redux";
import application from "./application";
import products from "./products";
import recipes from "./recipes";

export const rootReducer = combineReducers({
  application,
  products,
  recipes,
});
