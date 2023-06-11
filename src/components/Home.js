import React from 'react';
import myVid from '../assets/video/codebase-v2-WordPress-site.mp4';
import { services } from '../data/ourServices';
import ServicesCard from './Home/ServicesCard';
import ImgCarousel from './Home/ImgCarousel';

const Home = () => {
    return (
        <>
            <section className="flex flex-col items-center py-8">
                <h1 className="text-center text-gray-900 mb-8 text-[3rem] md:text-[4rem] font-[600] md:w-[600px] lg:w-[460px] leading-[4rem] md:leading-[4.4rem]">
                    WELCOME TO THE AGENCY WHERE COMPANIES COME TO SCALE.
                </h1>
                <video className="w-screen" src={myVid} autoPlay muted loop />
            </section>
            <section className="container mx-auto py-10">
                <h1 className="text-center text-[2rem] md:text-[3rem] text-gray-900 font-[500]">
                    About Us
                </h1>
                <p className="text-center text-[0.9rem] md:text-[1.16rem] mt-7 mx-7 md:mx-18 lg:mx-[10rem]">
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
            <section className="container mx-auto py-28 pb-24 border-b-[1px] border-[#000000c1]">
                <h1 className="text-center mb-8 text-[2rem] md:text-[3rem] text-gray-900 font-[500]">
                    Our Services
                </h1>
                <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10 lg:mx-[4rem]">
                    {services.map((serv, idx) => {
                        return <ServicesCard key={idx} {...serv} />;
                    })}
                </div>
            </section>
            <section className="container mx-auto py-16 pb-24 border-b-[1px] border-[#000000c1]">
                <div className="flex justify-between items-center mx-3 lg:mx-10">
                    <div className="flex justify-between items-center gap-3">
                        <div className="rounded-full w-10 h-10 flex justify-center items-center border-[1px] border-[#000]">
                            <img
                                className="w-5"
                                src="https://codebase-tech.com/wp-content/themes/asooltech/dist/codebase/images/sm-logo.png"
                                alt="/"
                            />
                        </div>
                        <div className="hidden rounded-3xl py-[7px] px-3 lg:flex justify-center items-center border-[1px] border-[#000]">
                            <h1>Work</h1>
                        </div>
                    </div>
                    <h1>LATEST WORK</h1>
                </div>
                <h1 className="text-center text-[2.2rem] font-[400] my-5">
                    OurWork
                </h1>
                <div className="mt-10 relative  flex justify-center items-center">
                    <div className="hidden absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] md:flex justify-center items-center user-select-none">
                        <span className="md:text-[17rem] lg:text-[22rem] xl:text-[27rem] text-[#5d5d5d31]">
                            WORK
                        </span>
                    </div>
                    <ImgCarousel />
                </div>
                <div className="w-full flex justify-center items-center mt-20">
                    <h1 className='underline text-[1.8rem]'>MORE WORK</h1>
                </div>
            </section>
        </>
    );
};

export default Home;
