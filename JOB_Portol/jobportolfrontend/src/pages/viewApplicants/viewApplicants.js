import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/Header/Header';
import { useContext } from 'react';
import { UserDataContext } from '../../context/userData';

const ViewApplicants = () => {
    
    const {userData , userLoading , authenticated} = useContext(UserDataContext);
    const [jobDetails, setJobDetails] = useState(null);
    const [applicants, setApplicants] = useState([]);
    const location = useLocation();

    const getJobIdFromQuery = () => {
        const params = new URLSearchParams(location.search);
        return params.get('jobId');
    };

    useEffect(() => {
        const fetchJobDetailsAndApplicants = async () => {
            try {
                const jobId = getJobIdFromQuery();
                console.log('Job ID:', jobId);
                if (!jobId) {
                    console.error('Job ID not found in query parameters');
                    return;
                }

                // Fetch job details
                const jobResponse = await axios.post(`http://localhost:4001/students/fetchJobById`, { jobId });
                const jobData = jobResponse.data;
                console.log('Job Data:', jobData);

                console.log('Applicants ids:', jobData.job.applicants);
                if (!jobData) {
                    console.error('No job data returned from API');
                    return;
                }

                setJobDetails(jobData.job);

                // Check if jobData.applicants is defined and is an array
                if (Array.isArray(jobData.job.applicants)) {
                    console.log('Applicants:', jobData.job.applicants);
                    // Fetch applicants' user data
                    const applicantPromises = jobData.job.applicants.map(applicantId =>
                        axios.post(`http://localhost:4001/users/getuserById`, { userId: applicantId })
                    );
                    const applicantResponses = await Promise.all(applicantPromises);
                    const applicantData = applicantResponses.map(response => response.data);
                    console.log('Applicants Data:', applicantData);
                    setApplicants(applicantData);
                } else {
                    console.warn('No applicants found for this job');
                }
            } catch (error) {
                console.error('Error fetching job details or applicants', error);
            }
        };

        fetchJobDetailsAndApplicants();
    }, [location.search]);

    return (
        <>
        <Header role="employer" isLoggedIn={userData || null} handleLogout={()=>{
            localStorage.clear();
            window.location.href = '/login';
        }}/>
        <div className="container mt-5">
            <h1 className="mb-4">Job Details</h1>
            {jobDetails && (
                <div className="card mb-4">
                    <div className="card-body">
                        <h2 className="card-title">{jobDetails.title}</h2>
                        <p className="card-text">{jobDetails.description}</p>
                    </div>
                </div>
            )}
            <h1 className="mb-4">Applicants</h1>
            {applicants.length > 0 ? (
                <div className="row">
                    {applicants.map(applicant => (
                        <div key={applicant._id} className="col-md-4 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="card-title">{applicant.name}</h3>
                                    <p className="card-text"><strong>Username:</strong> {applicant.username}</p>
                                    <p className="card-text"><strong>Email:</strong> {applicant.email}</p>
                                    <p className="card-text"><strong>Role:</strong> {applicant.role}</p>
                                    <p className="card-text"><strong>Phone:</strong> {applicant.phone}</p>
                                    <p className="card-text"><strong>Location:</strong> {applicant.location}</p>
                                    <p className="card-text"><strong>Bio:</strong> {applicant.bio}</p>
                                    <p className="card-text"><strong>Company:</strong> {applicant.company}</p>
                                    <p className="card-text"><strong>Verified:</strong> {applicant.isVerified ? 'Yes' : 'No'}</p>
                                    <p className="card-text"><strong>Resume:</strong> <a href={applicant.resume} target="_blank" rel="noopener noreferrer">View Resume</a></p>
                                    <p className="card-text"><strong>Applied Jobs:</strong> {applicant.appliedJobs.join(', ')}</p>
                                    <p className="card-text"><strong>Profile Picture:</strong> <img src={applicant.profilePicture} alt="Profile" className="img-fluid" /></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-muted">No applicants found</p>
            )}
        </div>
        </>
    );
};

export default ViewApplicants;