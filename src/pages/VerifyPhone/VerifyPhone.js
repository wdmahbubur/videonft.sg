import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const VerifyPhone = () => {
    const { user, isAuthenticating, setUser } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { id, number } = useParams();
    const [error, setError] = useState(null);

    useEffect(() => {
        if (user?.isMobileVerified) {
            navigate("/");
        }
        if (!user.id) {
            navigate("/login");
        }
    }, [navigate, user])

    if (isAuthenticating) {
        return <div className='text-center mx-auto'>
            <Spinner animation="border" role="status" className='mx-auto'>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const otp = e.target.elements.otp.value;
        if (otp) {
            await axios.post(`http://localhost:5000/api/users/verify-otp`, { id: id, number, otp })
                .then(res => {
                    if (res.status === 200) {
                        setUser(res.data.user);
                        navigate("/");
                    }
                })
                .catch(err => {
                    setError(err.response.data.message);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }
    return (
        <div className='d-flex justify-content-center align-items-center' style={{ backgroundColor: "#181C32", height: "100vh" }}>
            <div className="bg-white rounded shadow-sm mx-auto" style={{ padding: 30, maxWidth: 600, width: "100%" }}>
                {/* @if(Session::has('message'))	
						<p className="alert alert-info">{{ Session::get('message') }}</p>
					@endif */}

                <form className="form w-100" onSubmit={handleSubmit}>
                    <div className="text-center" style={{ marginBottom: 20 }}>
                        <h4 className="text-dark mb-3">Please check your phone number to get the OTP</h4>
                    </div>

                    <div className="fv-row" style={{ marginBottom: 20 }}>
                        <label className="form-label fs-6 fw-bolder text-dark">OTP</label>
                        <input className="form-control form-control-lg" type="number" name="otp" autoComplete="off" />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-lg btn-primary fw-bolder me-3 my-2">
                            {
                                !loading ?
                                    <span className="indicator-label">Verify</span>
                                    :
                                    <span className="indicator-progress">Please wait...
                                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                    </span>
                            }
                        </button>
                        {
                            error &&
                            <span className="text-danger d-block">{error}</span>
                        }
                    </div>
                </form>
            </div>
        </div>
    );
};

export default VerifyPhone;