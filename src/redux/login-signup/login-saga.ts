import { all, call, put, takeLatest } from "redux-saga/effects";
import {ServerReponse} from "http";
import {USER_LOGIN_API} from "./login-api.ts";
import {login, loginError, loginSuccess} from "./login-slice.ts";

function* handleUserLogin(action: { payload: {} }) {
    try {
        const response: ServerReponse = yield call(USER_LOGIN_API.login, action.payload);
        yield put(loginSuccess(response));
    } catch (e) {
        yield put(loginError(e.response?.data?.response));
    }
}

function* watchUserLogin() {
    yield takeLatest<any>(login.type, handleUserLogin);
};

export default function* LoginSaga() {
    yield all([watchUserLogin()]);
}