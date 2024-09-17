import createSagaMiddleware from 'redux-saga';
import LoginSaga from "../login-signup/login-saga.ts";

const sagaMiddleware = createSagaMiddleware();

export const runRootSagaMiddleware = () => {
    sagaMiddleware.run(LoginSaga);
};

export default sagaMiddleware;