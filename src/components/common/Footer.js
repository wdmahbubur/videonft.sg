import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-social">
                <a className="br" href="https://www.facebook.com/dslsingapore" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a>
                <a className="br" href="https://www.instagram.com/dslsingapore" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a>
                <a className="br" href="https://twitter.com/dslsingapore" target="_blank" rel="noreferrer"><i className="fa fa-twitter"></i></a>
                <a className="br" href="https://www.tiktok.com/@dslsingapore" target="_blank" rel="noreferrer"><img src="https://videonft.sg/assets/images/tiktok-icon.png" style={{ width: "15px" }} alt="" /></a>
                <a className="br" href="https://www.linkedin.com/company/dslsingapore" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a>
                <a className="br" href="https://www.pinterest.com/dslsingapore" target="_blank" rel="noreferrer"><i className="fa fa-pinterest"></i></a>
                <a className="br" href="https://medium.com/@dslsingapore" target="_blank" rel="noreferrer"><i className="fa fa-medium"></i></a>
                <a className="br" href="https://t.me/dslsg" target="_blank" rel="noreferrer"><i className="fa fa-telegram"></i></a>
            </div>

            <center>
                <div className="row me-0">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-10">
                        <div className="row">
                            <div className="col-md-2 col-xs-12">
                                <NavLink className="hover-class" to="/about-us" style={{ maxWidth: "100% !important" }}>
                                    <h6 style={{ fontSize: "0.8rem !important" }}>About Us</h6>
                                </NavLink>
                            </div>
                            <div className="col-md-2 col-xs-12">
                                <NavLink className="hover-class" to="/terms-of-use" style={{ maxWidth: "100% !important" }}>
                                    <h6 style={{ fontSize: " 0.8rem !important" }}>Terms Of Use</h6>
                                </NavLink>
                            </div>
                            <div className="col-md-2 col-xs-12" style={{ padding: "0px" }}>
                                <NavLink className="hover-class" to="/data-protection-notice" style={{ maxWidth: "100% !important" }}>
                                    <h6 style={{ fontSize: " 0.8rem !important" }}>Data Protection Notice</h6>
                                </NavLink>
                            </div>
                            <div className="col-md-2 col-xs-12">
                                <NavLink className="hover-class" to="/how-this-works" style={{ maxWidth: "100% !important" }}>
                                    <h6 style={{ fontSize: " 0.8rem !important" }}>How This Works?</h6>
                                </NavLink>
                            </div>
                            <div className="col-md-2 col-xs-12 footer-space">
                                <NavLink className="hover-class" to="/contact-us" style={{ maxWidth: "100% !important" }}>
                                    <h6 style={{ fontSize: " 0.8rem !important" }}>Contact</h6>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                </div>
            </center>
        </footer>
    );
};

export default Footer;