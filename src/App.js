import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home.js';
import Work from './components/Work.js';
import OurServices from './components/OurServices.js';
import Careers from './components/Careers.js';
import AboutUs from './components/AboutUs.js';
import ContactUs from './components/ContactUs.js';
import NavBar from './components/NavBar.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const App = () => {
    const [scrollBtn, setScrollBtn] = useState(false);
    const scroll = () => {
        if (window.scrollY >= 300) {
            setScrollBtn(true);
        } else {
            setScrollBtn(false);
        }
    };
    window.addEventListener('scroll', scroll);
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <>
            <NavBar />
            <div className="scrollbar-thin scrollbar-thumb-primary active:scrollbar-thumb-zinc-900 relative">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/ourservices" element={<OurServices />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/contactus" element={<ContactUs />} />
                </Routes>
                <button
                    onClick={() => scrollUp()}
                    className={
                        scrollBtn
                            ? 'flex flex-col items-center rounded-full bg-[#c5c5c549]  p-3 px-[0.9rem] fixed opacity-100 right-6 bottom-[2.2rem] border-[2px] border-[white] shadow-lg transition-all duration-700 z-[1000]'
                            : 'flex flex-col items-center rounded-full bg-[#26262662]  p-3 px-[0.9rem] fixed opacity-[0.01] -right-14 bottom-[6rem] border-[2px] border-[white] shadow-lg transition-all duration-700 z-[1000]'
                    }
                >
                    <FontAwesomeIcon
                        icon={faChevronUp}
                        className="text-primary -mb-[10px]"
                    />
                    <FontAwesomeIcon
                        icon={faChevronUp}
                        className="text-primary"
                    />
                </button>
            </div>
        </>
    );
};

export default App;
