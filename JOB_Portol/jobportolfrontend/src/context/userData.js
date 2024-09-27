import { createContext, useEffect, useState } from "react";
import url from "../url";
import axios from "axios";

const UserDataContext = createContext();

const UserDataProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const [userLoading, setLoading] = useState(true);
    const [userError, setError] = useState(null);
    const [authenticated , setAuthenticated] = useState(false);

    const fetchUserData = () => {

        let token  = localStorage.getItem('token');
        if (token){
            token = token.split(' ')[1];
        axios.post(`http://localhost:4001/users/userData`, {
            token: token
        }).then((res) => {
            setUserData(res.data);
            setAuthenticated(true);
            setLoading(false);
        }).catch((err) => {
            setError(err);
            setLoading(false);
        });
    }
    else{
        setLoading(false);
        setAuthenticated(false);
    }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <UserDataContext.Provider value={{ userData, userLoading, userError, authenticated }}>
            {children}
        </UserDataContext.Provider>
    );
};

export { UserDataProvider, UserDataContext };