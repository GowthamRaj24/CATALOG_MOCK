import Header from '../Header/Header';
import { useContext } from 'react';
import { UserDataContext } from '../../context/userData';
import JobSeekerJobs from '../jobSeekerJobs/jobSeekerJobs';

const JobSeekerLanding = () => {
    const {userData , userLoading} = useContext(UserDataContext);

    return(
        <>
        <Header role="job_seeker" isLoggedIn={userData || null} handleLogout={()=>{
                localStorage.clear();
                window.location.href = '/login';
            }}/>
        <div className="text-center">
            <h1>Job Seeker Landing Page</h1>
            <p>This is where job seekers can find relevant information
                and tools to help them find a job.</p>
        </div>
        <JobSeekerJobs />
        </>
    )
}

export default JobSeekerLanding;

