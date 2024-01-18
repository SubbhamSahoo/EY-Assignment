import React, { useState } from "react";
import { createEmployee } from "../slices/createEmployeeSlice";
import { AppDispatch, RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import EmployeeModal from "./EmployeeModal";


interface EmployeeDataSet {
    employee?:any
}

const EmployeeCard = ({employee}:EmployeeDataSet) => {
    const dispatch:AppDispatch = useDispatch()
    const emplyeeData = useSelector((state:RootState)=>state.createEmployee)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const addEmployee = () =>{
        setIsModalOpen(true)
    }

    const onSubmitEmployee = (data:{name:string,job:string}) =>{
        dispatch(createEmployee(data))
        setIsModalOpen(false)
    }

    return(
    <>
    <div className="card_container">
        <div className="card_body">
            {employee ? <><div className="employye_img_img">
                <img src={employee.avatar}/>
            </div>
            <h1>{employee.first_name} {employee.last_name}</h1>
            <h4>{employee.email}</h4></>:
            <div className="employye_img_img">
                <img className="add_employee" onClick={addEmployee} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/500px-Plus_symbol.svg.png?20081122110508"/>
            </div>
            }
        </div>
    </div>
    <EmployeeModal isModalOpen={isModalOpen} setIsModalOpen={(val:boolean)=>setIsModalOpen(val)} onSubmitEmployee={onSubmitEmployee}/>
    </>
    )
}

export default EmployeeCard