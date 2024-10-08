
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JobApplication from '../jobApplication/jobApplication';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { UserDataContext } from '../../context/userData';


const JobSeekerJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [error, setError] = useState('');
    const {userData , userLoading , authenticated} = useContext(UserDataContext);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.post('http://localhost:4001/students/fetchAllJobs');
                setJobs(response.data);
                console.log(response.data);
            } catch (err) {
                setError('Failed to load job listings.');
            }
        };

        fetchJobs();
    }, []);

    const handleApply = async (jobId) => {
        try {
            const response = await axios.post(`http://localhost:4001/students/applyforJob` ,{_id : userData?._id ,jobId : jobId});
            if (response.status === 200) {
                alert('Successfully applied for the job!');
            }
        } catch (err) {
            console.error(err.response);
            alert(err.response.data.message);
        }
    };

    return (
        <div className="container my-5">

            {jobs ? (
                jobs.map((job) => (
                    <JobApplication key={job._id} job={job} onApply={handleApply} />
                ))
            ) : (
                <p className="text-center">No jobs available at the moment.</p>
            )}
        </div>
    );
};

export default JobSeekerJobs;
