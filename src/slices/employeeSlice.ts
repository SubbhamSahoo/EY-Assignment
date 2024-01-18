import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios";

interface InitialStateDataSet {
    data:any;
    status:'idle' | 'loading' | 'success' | 'failed',
    error: string | null | any
}

export const fetchEmployees = createAsyncThunk('employees/fetchEmployees',async () => {
    try {
        const {data:{data}} = await axios.get("https://reqres.in/api/users")
        return data
    } catch (error) {
        throw error;
    }
})

const initialState:InitialStateDataSet = {
    status:'idle',
    data:[],
    error:null
}
const employeeSlice = createSlice({
    name:"employee",
    initialState:initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEmployees.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchEmployees.fulfilled, (state,action) => {
                state.status = 'success';
                state.data = action.payload
            })
            .addCase(fetchEmployees.rejected,(state,action) => {
                state.status = 'failed';
                state.error = action.error.message
            })
    },
})

export default employeeSlice.reducer