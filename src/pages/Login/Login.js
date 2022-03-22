import React, { useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { loginWithTiktok, loginWithGoogle, user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const url = location?.state?.from?.pathname || "/";

    useEffect(() => {
        if (user?.email) {
            navigate(url);
        }
    }, [navigate, user, url]);

    return (
        <div className='container py-3 text-center'>
            <div className='mx-auto mt-5 p-5 shadow text-center rounded' style={{ width: "100%", maxWidth: "28rem" }}>
                <img src='./img/dsl.png' alt='dsl-logo' style={{ width: "50px" }} />
                <hr style={{ height: "2px", background: "#dadce0" }} />
                <div className='text-center'>
                    <button className='login-btn' onClick={loginWithTiktok}><img src="https://img.icons8.com/ios-filled/50/000000/tiktok--v1.png" alt='' />Connect with Tiktok</button>
                    <button className='login-btn' onClick={loginWithGoogle}>
                        <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt='' />Connect with Google
                    </button>
                    <button className='login-btn'><img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt='' />Connect with Facebook</button>
                </div>
            </div>
            <NavLink to="/" className='btn btn-danger mt-4'>Back to home page</NavLink>
        </div>
    );
};

export default Login;