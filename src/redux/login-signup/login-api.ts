import axios from "axios";

const USER_LOGIN_API = {
    login: (data: any) =>
        axios.post(`login/api/url`, data).then((response: { data: any }) => {
            return response.data;
        }),
};

const USER_SIGNUP = {
    signup: (data: any) =>
        axios.post(`signup/api/url`, data).then((response: { data: any}) => {
            return response.data;
        }),
};

const FP_EMAIL_VERIFY = {
    emailVerify: (data: any) =>
        axios.post(`fp/email-verify`, data).then((response: { data: any }) => {
            return response.data;
        }),
};

const OTP_VERIFY = {
    otpVerify: (data: any) =>
        axios.post(`fp/otp-verify`, data).then((response: { data: any }) => {
            return response.data;
        }),
};

const FP_NEW_PASSWORD = {
    newPassword: (data: any) =>
        axios.post(`fp/new-password`, data).then((response: { data: any}) => {
            return response.data;
        }),
};

export { USER_LOGIN_API, USER_SIGNUP, FP_EMAIL_VERIFY, OTP_VERIFY, FP_NEW_PASSWORD }