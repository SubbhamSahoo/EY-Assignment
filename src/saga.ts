import {fetchDataStart, fetchDataSuccess, fetchDataError, addDataToRedux, addDataToReduxStart} from "./slices/employeeSlice"
import {call, put, takeEvery, all} from "redux-saga/effects"
import axios from "axios"
import { EmployeeActionType, createEmployeeError, createEmployeeStart, createEmployeeSuccess } from "./slices/createEmployeeSlice"

const api = {
    fetchEmployee: async () => {
        const {data} = await axios.get("https://reqres.in/api/users")
        return data
    },
    createEmployee: async (body:{name:string,job:string}) => {
        const {data} = await axios.post("https://reqres.in/api/users",body)
        return {data};
    }
}

function* fetchDataSaga(){
    try {
        const {data} = yield call(api.fetchEmployee)
        yield put (fetchDataSuccess(data))
    } catch (error:any) {
        yield put(fetchDataError(error.message))
    }
}

function* createEmployeeSaga(action:any){
    try {
        const {data} = yield call(()=>api.createEmployee(action.payload))
        yield put(createEmployeeSuccess(data))
    } catch (error:any) {
        yield put(createEmployeeError(error.message))
    }
}

function* addEmployeeToRedux(action:any){    
    yield put(addDataToRedux(action.payload))
}

function* watchFetchData(){
    yield takeEvery(fetchDataStart,fetchDataSaga)
    yield takeEvery(createEmployeeStart,createEmployeeSaga)
    yield takeEvery(addDataToReduxStart,addEmployeeToRedux)
}

export default function* rootSaga() {
    yield all([
        watchFetchData()
    ])
}