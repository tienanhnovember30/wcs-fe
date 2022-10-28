import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth";
import userReducer from "./userSlice";
import blogReducer from "./blogSlice";
import blogCateReducer from "./blogCateSlice";
import voucheReducer from "./voucheSlice";
const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  blog: blogReducer,
  blogCate: blogCateReducer,
  vouche: voucheReducer
});

export default rootReducer;
