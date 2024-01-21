import { createSlice} from "@reduxjs/toolkit";

interface EmployeeSlicsDataset{
    data:any,
    loading:boolean,
    error:string | null
}

const initialState:EmployeeSlicsDataset = {
    data:{},
    loading:false,
    error:null
}

const createEmployeeSlice = createSlice({
    name:"createEmployee",
    initialState:initialState,
    reducers:{
        createEmployeeStart(state,action) {
            state.loading = true;
            state.error = null
        },
        createEmployeeSuccess(state,action) {
            state.loading = false;
            state.data = action.payload
        },
        createEmployeeError(state,action) {
            state.loading = false;
            state.error = action.payload
        }
    }
})

export const {createEmployeeStart, createEmployeeSuccess, createEmployeeError} = createEmployeeSlice.actions
export type EmployeeActionType = typeof createEmployeeSlice.actions
export default createEmployeeSlice.reducer;