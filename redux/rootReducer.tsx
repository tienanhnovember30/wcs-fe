import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth";
import userReducer from "./userSlice";
import blogReducer from "./blogSlice";
import blogCateReducer from "./blogCateSlice";
import siderReducer from "./sliderSlice";
import voucheReducer from "./voucheSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  blog: blogReducer,
  blogCate: blogCateReducer,
  slider: siderReducer,
  vouche: voucheReducer
});

export default rootReducer;
