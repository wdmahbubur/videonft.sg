import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
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

                    <div className="nav ps-1 d-flex mb-none align-content-center main-menu" ref={menu}>
                        <center>
                            <div className="account-box pc-ml-auto d-md-none">
                                {
                                    !user.email ?
                                        <NavLink to="/login" className="text-decoration-none">
                                            <button className="outlined bg-dark">Connect</button>
                                        </NavLink>
                                        :
                                        <button className="outlined bg-dark" onClick={logout}>Disconnect</button>
                                }
                            </div>
                        </center>
                        <center><NavLink to="/marketplace" className="text-decoration-none ms-lg-5">  Marketplace </NavLink></center>
                        {
                            user.email &&
                            <center>
                                <NavLink to="/my-collection" className="text-decoration-none">  My Collection </NavLink>
                                <NavLink to="/create" className="text-decoration-none">  Create </NavLink>
                                <NavLink to="/profile" className="text-decoration-none">  Profile </NavLink>
                            </center>
                        }

                    </div>
                </div>
                <div className="h-right">
                    <div className="d-flex align-items-center">
                        <div className="account-box pc-ml-auto mb-none">

                            {
                                !user.email ?
                                    <NavLink to="/login" className="text-decoration-none">
                                        <button className="outlined bg-dark">Connect</button>
                                    </NavLink>
                                    :
                                    <button className="outlined bg-dark" onClick={logout}>Disconnect</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;