
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JobListing from '../jobApplication/jobApplication';
import 'bootstrap/dist/css/bootstrap.min.css';


const JobSeekerJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get('http://localhost:4001/student/fetchAllJobs');
                setJobs(response.data.jobs);
            } catch (err) {
                setError('Failed to load job listings.');
            }
        };

        fetchJobs();
    }, []);

    const handleApply = async (jobId) => {
        try {
            const response = await axios.post(`http://localhost:4001/student/applyforJob` , {jobId : jobId});
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
            <h2 className="text-center mb-4">Available Job Listings</h2>
            {error && <p className="alert alert-danger">{error}</p>}
            {jobs.length > 0 ? (
                jobs.map((job) => (
                    <JobListing key={job._id} job={job} onApply={handleApply} />
                ))
            ) : (
                <p className="text-center">No jobs available at the moment.</p>
            )}
        </div>
    );
};

export default JobSeekerJobs;
