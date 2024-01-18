import { useState } from 'react';
import { Button, Input, Modal } from 'antd';

interface EmployeeModalDataSet{
    isModalOpen:boolean,
    setIsModalOpen:any,
    onSubmitEmployee:any
}

const EmployeeModal = ({isModalOpen, setIsModalOpen,onSubmitEmployee}:EmployeeModalDataSet) => {
    const [employeeDetails,setEmployeeDetails] = useState({name:"",job:""})

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const clearDetails = ()=>{
    setEmployeeDetails({name:"",job:""})
    setIsModalOpen(false)
  }

  const submitDetails = () => {
    onSubmitEmployee(employeeDetails)
    setEmployeeDetails({name:"",job:""})
  }

  return (
    <>
      <Modal className='modal_body' title="Basic Modal" open={isModalOpen} onCancel={handleCancel} footer={false}>
        <div className='employee_details'>
            <Input className='input' placeholder='Enter Employee name' name="name" value={employeeDetails.name} onChange={(e)=>setEmployeeDetails({...employeeDetails,[e.target.name]:[e.target.value]})}/>
            <Input className='input' placeholder='Enter job name' name="job" value={employeeDetails.job} onChange={(e)=>setEmployeeDetails({...employeeDetails,[e.target.name]:[e.target.value]})}/>
        </div>
        <div className="modal_footer">
            <Button type='primary' onClick={submitDetails}>Submit</Button>
            <Button type='default' onClick={clearDetails}>Cancel</Button>
        </div>
      </Modal>
    </>
  );
};

export default EmployeeModal;