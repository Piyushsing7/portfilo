import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import menu from '../../assets/menu.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => setShowMenu(prev => !prev);
    const closeMenu = () => setShowMenu(false);

    return (
        <nav className="navbar">
            <img src={logo} alt="Site Logo" className="logo" />

            <div className="desktopMenu">
                <Link to="intro" activeClass="active" spy smooth offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link to="skills" activeClass="active" spy smooth offset={-50} duration={500} className="desktopMenuListItem">About</Link>
                <Link to="works" activeClass="active" spy smooth offset={-50} duration={500} className="desktopMenuListItem">Portfolio</Link>
                <Link to="clients" activeClass="active" spy smooth offset={-50} duration={500} className="desktopMenuListItem">Clients</Link>
            </div>

            <Link to="contact" smooth offset={-50} duration={500}>
                <button className="desktopMenuBtn">
                    Contact Me
                    <img src={contactImg} alt="Contact Icon" className="desktopMenuImg" />
                </button>
            </Link>

            <img src={menu} alt="Menu Icon" className="mobMenu" onClick={toggleMenu} />

            <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link to="intro" spy smooth offset={-100} duration={500} className="listItem" onClick={closeMenu}>Home</Link>
                <Link to="skills" spy smooth offset={-50} duration={500} className="listItem" onClick={closeMenu}>About</Link>
                <Link to="works" spy smooth offset={-50} duration={500} className="listItem" onClick={closeMenu}>Portfolio</Link>
                <Link to="clients" spy smooth offset={-50} duration={500} className="listItem" onClick={closeMenu}>Clients</Link>
                <Link to="contact" spy smooth offset={-50} duration={500} className="listItem" onClick={closeMenu}>Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;
