import React, { useContext, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserDataContext } from '../../context/userData';
import { ProgressBar } from 'react-bootstrap';

const JobApplication = ({ job, onApply }) => {
    const { title, description, location, salaryRange, jobType, skillsRequired, status } = job;
    const { userData } = useContext(UserDataContext);
    const [applied, setApplied] = useState(userData?.appliedJobs?.includes(job._id));
    const [applicationStatus, setApplicationStatus] = useState('');

    useEffect(() => {
        if (applied) {
            // Simulate fetching application status from an API
            setApplicationStatus('Your application is under review.');
        }
    }, [applied]);

    const handleApplyClick = () => {
        if (status === 'active') {
            onApply(job._id);
            setApplied(true);
        }
    };

    return (
        <div className="card mb-3 shadow-sm">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                    <strong>Job Type:</strong> {jobType.charAt(0).toUpperCase() + jobType.slice(1)} <br />
                    <strong>Location:</strong> {location} <br />
                    <strong>Salary Range:</strong> ${salaryRange.min} - ${salaryRange.max} <br />
                    <strong>Skills Required:</strong> {skillsRequired.join(', ')} <br />
                    <strong>Status:</strong> <span className={`badge ${status === 'active' ? 'bg-success' : 'bg-danger'}`}>{status}</span> <br />
                </p>
                <p className="card-text">{description}</p>
                {status === 'active' ? (
                    applied ? (
                        <>
                            <button className="btn btn-secondary" disabled>
                                Applied
                            </button>
                            <div className="mt-2">
                                <strong>Application Status:</strong> {applicationStatus}
                            </div>
                        </>
                    ) : (
                        <button
                            className="btn btn-primary"
                            onClick={handleApplyClick}
                        >
                            Apply Now
                        </button>
                    )
                ) : (
                    <button className="btn btn-secondary" disabled>
                        Job Closed
                    </button>
                )}
            </div>
        </div>
    );
};

export default JobApplication;
