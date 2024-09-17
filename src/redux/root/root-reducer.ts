import {combineReducers} from "@reduxjs/toolkit";
import loginSignupReducer from "../login-signup/login-slice";

const rootReducer = combineReducers({
    loginSignup: loginSignupReducer
});

export default rootReducer;