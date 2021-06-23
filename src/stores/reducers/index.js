import { combineReducers } from "redux";
import ColorsReducer from "./colors";
import PostsReducer from "./posts";
export default combineReducers({
  ColorsReducer, 
  PostsReducer
});