import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const menu = useRef();
    const trigger = useRef();
    const openMenu = () => {
        trigger.current.classList.toggle("mbopeneron");
        menu.current.classList.toggle('collapsed');
        menu.current.classList.toggle('open');
    }
    return (
        <header>
            <div className="container-fluid">
                <div className="h-left">
                    <NavLink to="/" className="logos">
                        <img src="./img/logo.png" alt="" className="logo1" />
                        <img src="./img/logo_jgn_on_binance.png" alt="" className="logo2" />
                    </NavLink>
                    <div className='d-flex d-md-block align-items-center justify-content-between flex-grow-1  menu-mobile-opener'>
                        <form className="menu-icon" id="form_search">
                            <center>
                                <div className="ms-3 header-search">
                                    <input placeholder="Search by owner or hashtag" name="search" />
                                    <i onClick="" className="fa fa-search"></i>
                                </div>
                            </center>
                        </form>
                        <div className="d-block d-md-none mbopener right" onClick={openMenu} ref={trigger}>
                            <i className="fa fa-bars"></i>
                            <i className="fa fa-times"></i>
                        </div>
                    </div>

                    <div className="nav ms-5 ms-md-0 ps-1 d-flex mb-none align-content-center" ref={menu}>
                        <center>
                            <div className="account-box pc-ml-auto d-md-none">
                                <NavLink to="/login" className="text-decoration-none">
                                    <button className="outlined bg-dark">Connect</button>
                                </NavLink>
                            </div>
                        </center>
                        <center><NavLink to="/marketplace" className="text-decoration-none">  Marketplace </NavLink></center>

                    </div>
                </div>
                <div className="h-right">
                    <div className="d-flex align-items-center">
                        <div className="account-box pc-ml-auto mb-none">
                            <NavLink to="/login" className="text-decoration-none">
                                <button type="button" className="outlined bg-dark">Connect</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;