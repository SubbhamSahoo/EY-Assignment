import React,{useState,useEffect} from 'react';
import EmployeeCard from './components/EmployeeCard';
import { useDispatch,useSelector } from 'react-redux';
import './App.scss';
import { fetchEmployees } from './slices/employeeSlice';
import { AppDispatch, RootState } from './store';

function App() {
  const dispatch:AppDispatch = useDispatch()
  const emplyeeData = useSelector((state:RootState)=>state.employee)

  useEffect(() => {
    dispatch(fetchEmployees())
  },[dispatch])
  return (
    <>
    <div className='container'>
    {
      emplyeeData.data.map((employee:any) => (
        <EmployeeCard key={employee.id} employee={employee}/>
      ))
    }
    <EmployeeCard />
    </div>
    </>
  );
}

export default App;
