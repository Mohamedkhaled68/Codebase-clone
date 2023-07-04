import React from "react";
import Landing from "../components/Home/Landing";
import Services from "../components/Home/Services";
import OurWork from "../components/Home/OurWork";
import Clients from "../components/Home/Clients";
import Footer from "../components/Home/Footer";

const Home = () => {
    return (
        <>
            <Landing />
            <Services />
            <OurWork />
            <Clients />
            <Footer />
        </>
    );
};

export default Home;
