import {createLogger} from "vite";
import {configureStore} from "@reduxjs/toolkit";

const loggerMiddleware = createLogger();

export const store = configureStore({
    reducer: rootReducer
})