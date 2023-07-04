import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faLinkedin,
    faBehance,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import FormSide from "../components/ContactUs/FormSide";
import InformationSide from "../components/ContactUs/InformationSide";

const ContactUs = () => {
    return (
        <>
            <div className="main-page flex items-baseline gap-[5rem] px-[2rem] lg:px-[5rem] mt-[3rem]">
                <FormSide />
                <InformationSide />
            </div>
            <div className="bg-stone-800 py-[4rem] px-[2rem] mt-[5rem]">
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

export default ContactUs;
