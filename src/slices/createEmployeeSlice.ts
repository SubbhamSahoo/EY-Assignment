import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

interface InitialStateDataSet {
    data:any;
    status:'idle' | 'loading' | 'success' | 'failed',
    error: string | null | any
}

export const createEmployee = createAsyncThunk("create/employeeData",async(body:any) => {
    try {
        const {data} = await axios.post("https://reqres.in/api/users",body)
        alert(`${data.name} as an employee added successfully`)
        return data
    } catch (error) {
        throw error;
    }
})

const initialState:InitialStateDataSet = {
    status:'idle',
    data:{},
    error:null
}

const createEmployeeSlice = createSlice({
    name:"createEmployee",
    initialState:initialState,
    reducers:{},
    extraReducers : (builder) => {
        builder
            .addCase(createEmployee.pending,(state)=>{
                state.status = 'loading'
            })
            .addCase(createEmployee.fulfilled,(state,action)=>{
                state.status = 'success';
                state.data = action.payload;
            })
            .addCase(createEmployee.rejected,(state,action)=>{
                state.status='failed';
                state.error=action.error.message
            })
    }
})

export default createEmployeeSlice.reducer