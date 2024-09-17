import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export interface LoginSignupState {
    isLoading: boolean;
    error: any;
    payload: any;
    isLoggedIn: boolean;
    userLoginResponse: any;
    userSignupResponse: any;
    fpResponse: any;
}

const initialState: LoginSignupState = {
    isLoading: false,
    error: null,
    payload: null,
    isLoggedIn: false,
    userLoginResponse: null,
    userSignupResponse: null,
    fpResponse: null,
};

export const loginSignupSlice = createSlice({
    name: "loginSignup",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<any>) => ({
            ...state,
            isLoading: true,
            payload: action.payload,
            error: null,
            isLoggedIn: false,
            userLoginResponse: null,
        }),
        loginSuccess: (state, action: PayloadAction<any>) => {
            localStorage.setItem("user", JSON.stringify(action.payload.data?.user_details));
            Cookies.set('refresh_token', action.payload?.data?.tokens?.refresh_token , { expires: 7 });
            Cookies.set('access_token', action.payload?.data?.tokens?.access_token , { expires: 7 });
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
                userLoginResponse: action.payload,
            };
        },
        loginError: (state, action: PayloadAction<any>) => ({
            ...state,
            isLoading: false,
            error: action.payload,
        })
    }
})

export const {
    login,
    loginSuccess,
    loginError,
} = loginSignupSlice.actions;

export default loginSignupSlice.reducer;