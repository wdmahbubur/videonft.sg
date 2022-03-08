import React from 'react';

const Contact = () => {
    return (
        <div className='container py-4'>
            <div className="row mb-3">
                <div className="col-12 text-center">
                    <h2 className='fw-bold'>Contact</h2>
                </div>
            </div>
            <div style={{ fontSize: "16px", lineHeight: "30px" }} className="text-center">
                <p>Please Contact us at <a href="mailto:support@videoNFT.sg" className='text-warning text-decoration-none'>support@videoNFT.sg</a> </p>
            </div>

        </div>
    );
};

export default Contact;