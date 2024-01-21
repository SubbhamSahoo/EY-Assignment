import {configureStore} from "@reduxjs/toolkit"
import employeeSlice from "./slices/employeeSlice";
import createEmployeeSlice from "./slices/createEmployeeSlice";
import createSagaMiddleware from "redux-saga"
import rootSaga from "./saga";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    employee:employeeSlice,
    createEmployee:createEmployeeSlice,
})

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer:rootReducer,
    middleware:(getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export default store;