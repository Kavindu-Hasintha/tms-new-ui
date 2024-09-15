import {createSlice, PayloadAction} from "@reduxjs/toolkit";

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
            // add user data to local storage
            // set cookies for refresh token and access token
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