import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { UserDataContext } from '../../context/userData';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/Header/Header';

const AddJobPage = () => {
    const { userData, userLoading } = useContext(UserDataContext);

    const [jobDetails, setJobDetails] = useState({
        user: { _id: "" },
        title: "",
        description: "",
        location: "",
        salaryRange: { min: 0, max: 0 },
        jobType: "full_time",
        skillsRequired: ""
    });

    useEffect(() => {
        if (userData) {
            setJobDetails(prevDetails => ({
                ...prevDetails,
                user: { _id: userData._id }
            }));
        }
    }, [userData]);

    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJobDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
    };

    const handleSalaryChange = (e) => {
        const { name, value } = e.target;
        setJobDetails(prevDetails => ({
            ...prevDetails,
            salaryRange: {
                ...prevDetails.salaryRange,
                [name]: Number(value)
            }
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Job Details:', jobDetails);
        try {
            const response = await axios.post('http://localhost:4001/employer/addJobPosting', jobDetails);
            console.log('Job posted successfully:', response.data);
            setShowPopup(true);
        } catch (error) {
            console.error('Error posting job:', error);
        }
    };

    useEffect(() => {
        if (showPopup) {
            setTimeout(() => {
                setShowPopup(false);
            }, 2000); // Show popup for 2 seconds
        }
    }, [showPopup]);

    return (
        <>
        <Header role="job_seeker" isLoggedIn={userData || null} handleLogout={() => {
                localStorage.clear();
                window.location.href = '/login';
            }} />
        <div className="container mt-5">
            <h1 className="mb-4">Add Job Page</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Title:</label>
                    <input type="text" className="form-control" name="title" value={jobDetails.title} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description:</label>
                    <input type="text" className="form-control" name="description" value={jobDetails.description} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Location:</label>
                    <input type="text" className="form-control" name="location" value={jobDetails.location} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Salary Min:</label>
                    <input type="number" className="form-control" name="min" value={jobDetails.salaryRange.min} onChange={handleSalaryChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Salary Max:</label>
                    <input type="number" className="form-control" name="max" value={jobDetails.salaryRange.max} onChange={handleSalaryChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Job Type:</label>
                    <select className="form-control" name="jobType" value={jobDetails.jobType} onChange={handleChange}>
                        <option value="full_time">Full Time</option>
                        <option value="part_time">Part Time</option>
                        <option value="contract">Contract</option>
                        <option value="internship">Internship</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Skills Required:</label>
                    <input type="text" className="form-control" name="skillsRequired" value={jobDetails.skillsRequired} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Post Job</button>
            </form>
            {showPopup && (
                <div className="alert alert-success mt-3" role="alert">
                    Post created successfully!
                </div>
            )}
        </div>
        </>
    );
};

export default AddJobPage;
