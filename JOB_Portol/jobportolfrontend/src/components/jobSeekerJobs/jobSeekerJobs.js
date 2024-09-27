
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JobApplication from '../jobApplication/jobApplication';
import 'bootstrap/dist/css/bootstrap.min.css';


const JobSeekerJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [error, setError] = useState('');

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
            const response = await axios.post(`http://localhost:4001/students/applyforJob` , {jobId : jobId});
            if (response.status === 200) {
                alert('Successfully applied for the job!');
            }
        } catch (err) {
            console.error('Error applying for the job:', err);
            alert('Failed to apply for the job.');
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
