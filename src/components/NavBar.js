import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { links } from '../data/navBarLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    const [navBar, setNavbar] = useState(false);
    const [menu, setMenu] = useState(false);

    const closeMenuOnScroll = () => {
        setMenu(false);
    };

    const menuToggle = () => {
        setMenu(!menu);
    };
    const scroll = () => {
        if (window.scrollY >= 30) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
    window.addEventListener('scroll', () => {
        closeMenuOnScroll();
        scroll();
    });
    return (
        <div className="fixed w-full top-0 z-50">
            <nav
                className={
                    navBar
                        ? 'bg-white transition-shadow duration-300 ease-linear shadow-sm py-7 relative w-full top-0'
                        : 'bg-white py-7 relative w-full top-0'
                }
            >
                <div className="container mx-auto px-8 md:px-0 flex items-center justify-between lg:justify-start">
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
                                    <NavLink
                                        to={link.path}
                                        className={link.style}
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                    <FontAwesomeIcon
                        onClick={() => menuToggle()}
                        icon={faBarsStaggered}
                        className="text-[1.5rem] cursor-pointer text-primary md:hidden"
                    />
                </div>
                <div
                    className={
                        menu
                            ? 'bg-white px-4 absolute w-full -z-[50] bottom-[-14rem] transition-all duration-700'
                            : 'bg-white px-4 absolute w-full -z-[50] bottom-[20rem] transition-all duration-700'
                    }
                >
                    <ul className="flex flex-col gap-3 py-3 ">
                        {links.map((link) => {
                            return (
                                <li key={link.id}>
                                    <NavLink
                                        to={link.path}
                                        className={link.style}
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
