import axios from 'axios';
import React, { useState, useEffect } from 'react';

const About = () => {
    const [data, setData] = useState('');
    useEffect(() => {
        const getApiData = async () => {
            await axios.get('https://dslegends.org/api/about-dsl')
                .then(res => {
                    setData(res.data);
                })
        };
        getApiData()
    }, []);
    return (
        <div className="container py-4 mb-5">
            <div className="row mb-3">
                <div className="col-12 text-center">
                    <h2 className='fw-bold'>About Us</h2>
                </div>
            </div>
            <div style={{ fontSize: "16px", lineHeight: "30px" }}>
                <div dangerouslySetInnerHTML={{ __html: data }}></div>
            </div>
        </div>
    );
};

export default About;