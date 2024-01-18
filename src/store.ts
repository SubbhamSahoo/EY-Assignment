import {configureStore} from "@reduxjs/toolkit"
import employeeSlice from "./slices/employeeSlice";
import createEmployeeSlice from "./slices/createEmployeeSlice";

const store = configureStore({
    reducer:{
        employee:employeeSlice,
        createEmployee:createEmployeeSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export default store;