import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home.js';
import Work from './components/Work.js';
import OurServices from './components/OurServices.js';
import Careers from './components/Careers.js';
import AboutUs from './components/AboutUs.js';
import ContactUs from './components/ContactUs.js';
import NavBar from './components/NavBar.js';

const App = () => {
    return (
        <>
            <NavBar />
            <div className="scrollbar-thin scrollbar-thumb-primary">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/ourservices" element={<OurServices />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/contactus" element={<ContactUs />} />
                </Routes>
            </div>
        </>
    );
};

export default App;
