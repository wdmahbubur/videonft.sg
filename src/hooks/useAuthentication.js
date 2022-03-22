import axios from "axios";
import { useEffect, useState } from "react";

const useAuthentication = () => {
    const [user, setUser] = useState({});
    const [isAuthenticating, setIsAuthenticating] = useState(false);

    useEffect(() => {
        setIsAuthenticating(true);
        axios.get("http://localhost:5000/api/users/login/success", {
            withCredentials: true,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true,
            },
        })
            .then(res => {
                setUser(res.data.user);
            })
            .catch(err => {
                setUser({});
            })
            .finally(() => {
                setIsAuthenticating(false);
            }
            );
    }, []);

    const loginWithTiktok = () => {
        axios.get("http://localhost:5000/api/users/tiktok/login", {
            // withCredentials: true,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000/",
            },
        })
            .then(res => console.log(res));
    }
    const loginWithGoogle = async () => {
        window.open("http://localhost:5000/api/users/google", "_self");
    }

    const logout = () => {
        axios.get("http://localhost:5000/api/users/logout", {
            withCredentials: true,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true,
            },
        })
            .then(res => {
                setUser({});
            })
            .catch(err => {
                console.log(err);
            });
    }


    return {
        loginWithTiktok,
        loginWithGoogle,
        user,
        isAuthenticating,
        logout,
        setUser
    }
}

export default useAuthentication;