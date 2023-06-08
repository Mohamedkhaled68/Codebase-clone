import React from 'react';
import myVid from '../assets/video/codebase-v2-WordPress-site.mp4';
import { services } from '../data/ourServices';
import ServicesCard from './Home/ServicesCard';

const Home = () => {
    return (
        <>
            <section className="flex flex-col items-center py-8">
                <h1 className="text-center text-gray-900 mb-8 text-[3rem] md:text-[4rem] font-[600] md:w-[600px] lg:w-[460px] leading-[4rem] md:leading-[4.9rem]">
                    WELCOME TO THE AGENCY WHERE COMPANIES COME TO SCALE.
                </h1>
                <video className="w-screen" src={myVid} autoPlay muted loop />
            </section>
            <section className="container mx-auto py-10">
                <h1 className="text-center text-[2rem] md:text-[3rem] text-gray-900 font-[500]">
                    About Us
                </h1>
                <p className="text-center text-[0.9rem] md:text-[1.16rem] mt-7">
                    From an idea, to a full project, with 24/7 support for your
                    project, that’s what we have been doing since 2020, by a 40
                    person-team , a high quality, a variety of services, a full
                    stack of tools. Our team will leverage the multiple use
                    cases and skillsets under their belt to achieve results you
                    seek. What does your business need to grow? Is it marketing?
                    Branding? Software production? you name it, we give you a
                    one-stop for all your business needs with the best of the
                    best in each speciality.
                </p>
            </section>
            <section className="container mx-auto py-16 pb-24 border-b-[1px] border-[#000000c1]">
                <h1 className="text-center mb-8 text-[2rem] md:text-[3rem] text-gray-900 font-[500]">
                    Our Services
                </h1>
                <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((serv, idx) => {
                        return <ServicesCard key={idx} {...serv} />;
                    })}
                </div>
            </section>
        </>
    );
};

// {category, description, imgUrl}

export default Home;
