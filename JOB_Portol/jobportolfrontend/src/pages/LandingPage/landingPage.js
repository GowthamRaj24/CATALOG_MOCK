import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// @ts-ignore
import JobSeekerLanding from '../../components/jobSeekerLanding/jobSeekerLanding'; 
// @ts-ignore
import EmployerLanding from '../../components/employerLanding/employerLanding';
import "./landingPage.css";

const LandingPage = () => {
    const [role, setRole] = useState('job_seeker');
    const [showLanding, setShowLanding] = useState(false);
    const handleRoleSelection = (selectedRole) => {
        setRole(selectedRole);
        setShowLanding(true);
    };

    return (
        <div className="container d-flex align-items-center justify-content-center min-vh-100">
            {!showLanding ? (
                <div className="card shadow-lg p-4" style={{ width: '400px' }}>
                    <h2 className="text-center mb-4">Select Your Role</h2>
                    <div className="d-grid gap-2">
                        <button
                            className="btn btn-primary"
                            onClick={() => handleRoleSelection('job_seeker')}
                        >
                            Job Seeker
                        </button>
                        <button
                            className="btn btn-secondary"
                            onClick={() => handleRoleSelection('employer')}
                        >
                            Employer
                        </button>
                    </div>
                </div>
            ) : role === 'job_seeker' ? (
                <JobSeekerLanding />
            ) : (
                <EmployerLanding />
            )}
        </div>
    );
};

export default LandingPage;
