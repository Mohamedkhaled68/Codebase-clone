import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { links } from "../data/navBarLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import OutSideClickHandler from "react-outside-click-handler";

const NavBar = () => {
    const [navBar, setNavbar] = useState(false);
    const [menu, setMenu] = useState(false);
    const [serv, setServ] = useState(false);

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
    window.addEventListener("scroll", () => {
        closeMenuOnScroll();
        scroll();
    });
    return (
        <div className="fixed w-full top-0 z-50">
            <nav
                className={
                    navBar
                        ? "bg-white transition-shadow md:px-8 duration-300 ease-linear shadow-sm py-7 lg:px-24 relative w-full top-0"
                        : "bg-white py-7 md:px-8 lg:px-24 relative w-full top-0"
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
                    <ul className="hidden md:flex lg:ml-[7rem] xl:ml-[11rem]">
                        {links.map((link) => {
                            return (
                                <li
                                    key={link.id}
                                    onClick={() => {
                                        if (link.id === 3) {
                                            setServ(!serv);
                                        }
                                    }}
                                >
                                    <NavLink
                                        to={link.path}
                                        className="hover:text-primary ease-linear duration-500 font-pop p-3 md:text-[0.89rem] xl:p-5 xl:text-[1rem]"
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
                            ? "bg-white px-4 absolute w-full -z-[50] bottom-[-14rem] transition-all duration-700"
                            : "bg-white px-4 absolute w-full -z-[50] bottom-[20rem] transition-all duration-700"
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
                {serv && (
                    <OutSideClickHandler onOutsideClick={()=>setServ(false)}>
                        <div className="absolute max-w-[350px] px-4 py-2 bg-white border-t-[1.5px] border-primary left-[50%] translate-x-[-50%] bottom-[-100%] translate-y-[-5%] shadow-2xl">
                            <ul className="flex flex-wrap gap-4 list-disc">
                                <li className="hover:ml-3 duration-300 ml-2">
                                    <Link to='/ourservices/web' onClick={()=>setServ(false)}>Web Development</Link>
                                </li>
                                <li className="hover:ml-3 duration-300 ml-2">
                                    <Link to='/ourservices/mobile' onClick={()=>setServ(false)}>Mobile Development</Link>
                                </li>
                                <li className="hover:ml-3 duration-300 flex-1 ml-2">
                                    <Link onClick={()=>setServ(false)}>Branding</Link>
                                </li>
                            </ul>
                        </div>
                    </OutSideClickHandler>
                )}
            </nav>
        </div>
    );
};

export default NavBar;
