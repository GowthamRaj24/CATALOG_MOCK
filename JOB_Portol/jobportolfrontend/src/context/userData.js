import { createContext, useEffect } from "react";
import url from "../url";
import axios from "axios";

const userData = () => {
    const [authenticated , setAuthenticated] = useState(false);
    const [user , setUser] = useState({});
    const [token , setToken] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");
        if(token){
            setAuthenticated(true);
            setToken(token);
        }
    } , []);

    useEffect(() => {
        if(token){
            userD();
        }
    } , [token]);

    const userD = async () => await axios.post(`${url}/users/getUser` , {token : token}).then((res) => {
        setUser(res.data);
    }
    ).catch((err) => console.log(err));
}


export default createContext(userData);