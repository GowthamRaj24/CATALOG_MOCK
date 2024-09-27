import React, { useContext } from 'react';
import { UserDataContext } from '../../context/userData';

const LandingPage = () => {
    const { userData, userLoading } = useContext(UserDataContext);

    if (userLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>User Profile</h1>
            <p>Name: {userData?.name}</p>
            <p>Email: {userData?.email}</p>
        </div>
    );
};

export default LandingPage;
