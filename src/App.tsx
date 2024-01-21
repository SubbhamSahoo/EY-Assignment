import React,{useState,useEffect} from 'react';
import EmployeeCard from './components/EmployeeCard';
import { useDispatch,useSelector } from 'react-redux';
import './App.scss';
import { AppDispatch, RootState } from './store';
import { fetchDataStart } from './slices/employeeSlice';

function App() {
  const dispatch:AppDispatch = useDispatch()
  const {data} = useSelector((state:RootState)=>state.employee)

  useEffect(() => {
    dispatch(fetchDataStart())
  },[dispatch])
  return (
    <>
    <div className='container'>
    {
      data.map((employee:any) => (
        <EmployeeCard key={employee.id} employee={employee}/>
      ))
    }
    <EmployeeCard />
    </div>
    </>
  );
}

export default App;
