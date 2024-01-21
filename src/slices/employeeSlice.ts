import { createSlice} from "@reduxjs/toolkit";

interface EmployeeDataObjectDataset{
    first_name:string,
    last_name:string,
    avatar?:string,
    id?:number,
    email:string
}
interface EmployeeSlicsDataset{
    data:EmployeeDataObjectDataset[],
    loading:boolean,
    error:string | null
}

const initialState:EmployeeSlicsDataset = {
    data:[],
    loading:false,
    error:null
}

const employeeSlice = createSlice({
    name:"employee",
    initialState:initialState,
    reducers:{
        fetchDataStart(state) {
            state.loading = true;
            state.error = null
        },
        fetchDataSuccess(state,action){
            state.loading = false;
            state.data = action.payload
        },
        fetchDataError(state,action){
            state.loading = false;
            state.error = action.payload
        },
        addDataToReduxStart(state,action){
            state.loading = true;
            state.error = null
        },
        addDataToRedux(state,action){
            state.loading = false;
            state.data = action.payload
        },
    }
})

export const {fetchDataStart, fetchDataSuccess, fetchDataError, addDataToRedux, addDataToReduxStart} = employeeSlice.actions

export default employeeSlice.reducer