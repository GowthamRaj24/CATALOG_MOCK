import React, { useContext } from 'react';
import { UserDataContext } from '../../context/userData';
// @ts-ignore
import EmployerLanding from '../../components/employerLanding/employerLanding';
// @ts-ignore
import JobSeekerLanding from '../../components/jobSeekerLanding/jobSeekerLanding';

const LandingPage = () => {
    const { userData, userLoading } = useContext(UserDataContext);
    const role = userData?.role || null;
    if (userLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {role === 'job_seeker' ? <JobSeekerLanding /> : <EmployerLanding />}
        </div>
    );
};

export default LandingPage;