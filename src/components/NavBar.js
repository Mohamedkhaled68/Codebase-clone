import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { links } from '../data/navBarLinks';

const NavBar = () => {
    const [navBar, setNavbar] = useState(false);
    const scroll = () => {
        if (window.scrollY >= 30) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
    window.addEventListener('scroll', scroll);
    return (
        <nav
            className={
                navBar
                    ? 'bg-white transition-shadow duration-300 ease-linear shadow-sm py-7 fixed w-full top-0 z-50'
                    : 'bg-white py-7 fixed w-full top-0 z-50'
            }
        >
            <div className="container mx-auto flex items-center justify-between lg:justify-start">
                <NavLink to="/">
                    <img
                        src="https://codebase-v3.codebase-product.com/wp-content/uploads/2022/08/Frame-1.png"
                        alt="/"
                        title="Codebase"
                        className="w-36"
                    />
                </NavLink>
                <ul className="hidden md:flex ml-0 lg:ml-24">
                    {links.map((link) => {
                        return (
                            <li key={link.id}>
                                <NavLink to={link.path} className={link.style}>
                                    {link.name}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
