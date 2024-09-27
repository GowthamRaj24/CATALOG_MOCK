
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JobApplication from '../jobApplication/jobApplication';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { UserDataContext } from '../../context/userData';
import EmployeeApplication from '../employeeApplication/employeeApplication';

const EmployeeJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [error, setError] = useState('');
    const {userData , userLoading , authenticated} = useContext(UserDataContext);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                console.log(userData._id);
                const response = await axios.post('http://localhost:4001/employer/fetchMyPostings' , {Id : userData._id});
                setJobs(response.data.jobPostings);
                console.log(response.data);

            } catch (err) {
                setError('Failed to load job listings.');
            }
        };

        fetchJobs();
    }, []);

    const handleApply = () => {
        console.log("Hello");
    }


    return (
        <div className="container my-5">

            {jobs && jobs.length > 0? (
                jobs.map((job) => (
                    <EmployeeApplication key={job._id} job={job} onApply={handleApply} />
                ))
            ) : (
                <p className="text-center">No jobs available at the moment.</p>
            )}
        </div>
    );
};

export default EmployeeJobs;
