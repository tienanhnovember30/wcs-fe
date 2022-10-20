import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth";
import userReducer from "./userSlice";
import voucheReducer from "./voucheSlice";
const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  vouche: voucheReducer
});

export default rootReducer;
