import { createContext, useEffect, useState } from "react";
import url from "../url";
import axios from "axios";

const UserDataContext = createContext();

const UserDataProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const [userLoading, setLoading] = useState(true);
    const [userError, setError] = useState(null);

    const fetchUserData = () => {
        const token  = localStorage.getItem('token').split(' ')[1];

        axios.post(`http://localhost:4001/users/userData`, {
            token: token
        }).then((res) => {
            setUserData(res.data);
            setLoading(false);
        }).catch((err) => {
            setError(err);
            setLoading(false);
        });
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <UserDataContext.Provider value={{ userData, userLoading, userError }}>
            {children}
        </UserDataContext.Provider>
    );
};

export { UserDataProvider, UserDataContext };