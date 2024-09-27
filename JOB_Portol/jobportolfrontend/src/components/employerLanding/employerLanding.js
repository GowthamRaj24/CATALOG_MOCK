import React from 'react';
import Header from '../Header/Header';
import { useContext } from 'react';
import { UserDataContext } from '../../context/userData';
import EmployeeJobs from '../employeeJobs/employeeJobs';

const EmployerLanding = () => {
    const {userData , userLoading , authenticated} = useContext(UserDataContext);   
    return (
        <div>
            <Header role="employer" isLoggedIn={userData} handleLogout={()=>{
                localStorage.clear();
                window.location.href = '/login';
            }}/>
            <h1>Welcome to the Employer Landing Page</h1>
            <p>This is where employers can find relevant information and tools.</p>
            <EmployeeJobs />
        </div>
    );
}

export default EmployerLanding;