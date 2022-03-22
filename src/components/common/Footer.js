import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const [socialLinks, setSocialLinks] = useState({});

    const getSocialLinks = async () => {
        const res = await axios.get('https://dslegends.org/api/social-links.php');
        setSocialLinks(res.data);
    }
    useEffect(() => {
        getSocialLinks();
    }, []);
    return (
        <footer className="footer">
            <div className="footer-social">
                {socialLinks.facebook && <a className="br" href={socialLinks.facebook} target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a>}
                {socialLinks.instagram && <a className="br" href={socialLinks.instagram} target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a>}
                {socialLinks.twitter && <a className="br" href={socialLinks.twitter} target="_blank" rel="noreferrer"><i className="fa fa-twitter"></i></a>}
                {socialLinks.tiktok && <a className="br" href={socialLinks.tiktok} target="_blank" rel="noreferrer"><img src="https://videonft.sg/assets/images/tiktok-icon.png" style={{ width: "15px" }} alt="" /></a>}
                {socialLinks.linkedin && <a className="br" href={socialLinks.linkedin} target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a>}
                {socialLinks.pinterest && <a className="br" href={socialLinks.pinterest} target="_blank" rel="noreferrer"><i className="fa fa-pinterest"></i></a>}
                {socialLinks.medium && <a className="br" href={socialLinks.medium} target="_blank" rel="noreferrer"><i className="fa fa-medium"></i></a>}
                {socialLinks.discord && <a className="br" href={socialLinks.discord} target="_blank" rel="noreferrer"><i className="fa-brands fa-discord"></i></a>}
                {socialLinks.telegram && <a className="br" href="https://t.me/dslsg" target="_blank" rel="noreferrer"><i className="fa fa-telegram"></i></a>}

            </div>

            <center>
                <div className="row me-0">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-10">
                        <div className="row fw-normal">
                            <div className="col-md-2 col-xs-12">
                                <NavLink className="hover-class" to="/about-us" style={{ maxWidth: "100% !important" }}>
                                    <h6>About Us</h6>
                                </NavLink>
                            </div>
                            <div className="col-md-2 col-xs-12">
                                <NavLink className="hover-class" to="/terms-of-use" style={{ maxWidth: "100% !important" }}>
                                    <h6>Terms Of Use</h6>
                                </NavLink>
                            </div>
                            <div className="col-md-2 col-xs-12" style={{ padding: "0px" }}>
                                <NavLink className="hover-class" to="/data-protection-notice" style={{ maxWidth: "100% !important" }}>
                                    <h6>Data Protection Notice</h6>
                                </NavLink>
                            </div>
                            <div className="col-md-2 col-xs-12">
                                <NavLink className="hover-class" to="/how-this-works" style={{ maxWidth: "100% !important" }}>
                                    <h6>How This Works?</h6>
                                </NavLink>
                            </div>
                            <div className="col-md-2 col-xs-12 footer-space">
                                <NavLink className="hover-class" to="/contact-us" style={{ maxWidth: "100% !important" }}>
                                    <h6>Contact</h6>
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