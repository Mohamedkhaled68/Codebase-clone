import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faLinkedin,
    faBehance,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import React from "react";

const Footer = () => {
    return (
        <>
            <div className="bg-primary py-[5rem] flex justify-center items-center">
                <div className="text-center md:flex md:justify-between md:items-start md:text-start md:gap-[2rem] lg:gap-[5rem]">
                    <h1 className="text-[2.9rem] lg:text-[4rem] xl:text-[5rem] text-white mb-10">
                        Have an inquery ?
                    </h1>
                    <div className="flex-col ">
                        <p className="text-white text-xl lg:text-[1.4rem]">
                            We Definitely Have An Answer, Get In Touch
                            <br /> With Us, We Are Here To Help You.
                        </p>
                        <button className="mt-10 py-3 px-10 text-lg bg-primary text-white border-[#fff] border-[1px] hover:bg-white hover:text-primary transition-colors ease-linear duration-300 rounded-full">
                            Get a free consultaion NOW
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-stone-800 py-[4rem] px-[2rem]">
                <div className="flex flex-col md:flex-row md:justify-between">
                    <div className="flex flex-col justify-between gap-2 mb-[2rem]">
                        <p className="text-white mb-3 font-bold">Follow us</p>
                        <div className="icons flex items-center gap-2">
                            <FontAwesomeIcon icon={faFacebook} color="#fff" />
                            <FontAwesomeIcon icon={faLinkedin} color="#fff" />
                            <FontAwesomeIcon icon={faBehance} color="#fff" />
                            <FontAwesomeIcon icon={faInstagram} color="#fff" />
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-2 mb-[2rem]">
                        <p className="text-white font-bold">Address</p>
                        <p className="text-white">Mansoura - Egypt</p>
                    </div>
                    <div className="flex flex-col items-start gap-2 mb-[2rem]">
                        <p className="text-white font-bold">Phone</p>
                        <p className="text-white">+201010388832</p>
                    </div>
                    <div className="flex flex-col items-start gap-2 mb-[2rem]">
                        <p className="text-white font-bold">Email</p>
                        <p className="text-white">info@codebase-tech.com</p>
                    </div>
                </div>
                <p className="text-white text-[15px] absolute bottom-3">
                    Copyright © 2023 CODEBASE
                </p>
            </div>
        </>
    );
};

export default Footer;
