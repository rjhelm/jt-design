import React from 'react';
import logo from "../../public/img/logo.png"

function Navbar(props) {
    return (
        <div className="navbar">
            <img src={logo} className="logo" alt="JT-Design Logo" />
            <div className="navbar-sub">
                <a href="/about" className="nav-list">About</a>
                <a href="/artwork" className="nav-list">Artwork</a>
                <a href="/contact" className="nav-list">Contact</a>
            </div>
        </div>
    )
}

export default Navbar;