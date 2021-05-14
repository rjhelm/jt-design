import React from 'react';
import logo from "../../public/img/logo.png"

function Navbar(props) {
    return (
        <Navbar bg="dark" variant="dark" sticky="top" className="navbar">
            <img src={logo} className="logo" alt="JT-Design Logo" />
            <nav className="mr-auto">
                <a href="/about" className="nav-list">About</a>
                <a href="/artwork" className="nav-list">Artwork</a>
                <a href="/contact" className="nav-list">Contact</a>
            </nav>
        </Navbar>
    )
}

export default Navbar;