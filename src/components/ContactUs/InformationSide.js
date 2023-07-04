import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faLinkedin,
    faBehance,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const InformationSide = () => {
    return (
        <div className="right-side w-[35%]">
            <ul className="flex flex-col gap-[3rem]">
                <li className="w-[60%]">
                    Give us a call or drop by anytime, we endea vour to answer
                    all enquiries within 24 hours on all days. We will be happy
                    to answer your questions.
                </li>
                <li>
                    <p>OUR MAILBOX</p>
                    <p>info@codebase-tech.com</p>
                </li>
                <li>
                    <p>OUR PHONE</p>
                    <p>+201010388832</p>
                </li>
                <li>
                    <p>OUR ADDRESS</p>
                    <p>Mansoura - Egypt</p>
                </li>
                <li>
                    <p className=" mb-3 font-bold">Follow us</p>
                    <div className="icons flex items-center gap-2">
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faLinkedin} />
                        <FontAwesomeIcon icon={faBehance} />
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default InformationSide;
