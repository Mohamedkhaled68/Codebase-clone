import React from "react";
import Steps from "./Steps";
import { steps } from "../../../data/stepsData";
import Cube from "./Cube";

const Web = () => {
    console.log(window.location);
    return (
        <>
            <section className="mx-[2rem] mb-[5rem] lg:mx-[6rem] px-4 py-[5rem] border-black border-b-[1px]">
                <h1 className="text-xl mb-2">Our Services</h1>
                <p className="font-semibold text-3xl lg:text-6xl">
                    Web Development
                </p>
                <div className="lg:mx-[1.5rem] flex flex-col md:flex-row md:justify-center items-center mt-[4rem] gap-[3rem] lg:gap-[5rem]">
                    <div className="w-full h-[350px] lg:h-full">
                        <img
                            className="w-full h-full object-cover"
                            src="https://codebase-tech.com/wp-content/uploads/2023/01/WD.jpg"
                        />
                    </div>
                    <p className="text-center lg:text-left text-[2rem] lg:text-[5rem] lg:w-[50%] leading-[2.5rem] lg:leading-[5.3rem] font-semibold">
                        Your visually appealing easy to navigate well
                        performance website is almost ready with our team.
                    </p>
                </div>
                <div className="mx-[2rem] text-center flex flex-col items-center mt-[5rem] gap-[3rem]">
                    <p className="text-[2rem] lg:text-[3.5rem] font-normal">
                        Create a website to extend your reach to everyone in the
                        world.
                    </p>
                    <p className="text-[1.2rem] lg:text-[1.7rem] leading-[2rem] md:leading-[2.5rem]">
                        Starting from information gathering, ending by the
                        launching, with focusing on every single detail in
                        between steps that may cause any issue for your business
                        or your customer, we help you create a going concern
                        business in this highly competitive marketplace.
                    </p>
                    <button className="uppercase text-black rounded-3xl border-[1px] border-black py-2 px-8 text-lg hover:bg-primary hover:text-white ease-linear duration-300">
                        get a quotation
                    </button>
                </div>
            </section>
            <section>
                <div className="ml-[7rem] flex items-center gap-3 mb-[5rem]">
                    <div className="rounded-full w-10 h-10 flex justify-center items-center border-[1px] border-[#000]">
                        <img
                            className="w-5"
                            src="https://codebase-tech.com/wp-content/themes/asooltech/dist/codebase/images/sm-logo.png"
                            alt="/"
                        />
                    </div>
                    <div className="hidden rounded-3xl py-[7px] px-4 lg:flex justify-center items-center border-[1px] border-[#000]">
                        <h1 className="text-[1.2rem] font-semibold">
                            we are software house
                        </h1>
                    </div>
                </div>
                <div className="w-full py-[2rem] px-[3rem] bg-black">
                    <h1 className="text-white text-center p-4 text-[2rem] lg:text-[3.5rem]">
                        Your web development
                        <br /> journey with our team.
                    </h1>
                    <div className="mt-[2rem] lg:mx-[6rem] h-[460px]">
                        <img
                            className="w-full h-full object-cover"
                            src="https://codebase-tech.com/wp-content/uploads/2023/01/WS_GIF.gif"
                        />
                    </div>
                    <div className="mx-[6rem] mt-[2rem] flex flex-col lg:flex-row lg:justify-around items-center cursor-pointer">
                        <div className="relative text-[7rem] lg:text-[10rem] text-primary">
                            <span className="absolute w-[300px] left-[-70%] translate-x-[10%] top-[50%] translate-y-[-50%] text-white text-[1.5rem] lg:text-[2rem]">
                                Information gathring
                            </span>
                            01
                        </div>
                        <div className="relative text-[7rem] lg:text-[10rem] text-primary">
                            <span className="absolute left-[-30%] translate-x-[30%] top-[50%] translate-y-[-50%] text-white text-[1.5rem] lg:text-[2rem]">
                                Design
                            </span>
                            02
                        </div>
                        <div className="relative text-[7rem] lg:text-[10rem] text-primary">
                            <span className="absolute left-[-30%] translate-x-[30%] top-[50%] translate-y-[-50%] text-white text-[1.5rem] lg:text-[2rem]">
                                Build
                            </span>
                            03
                        </div>
                        <div className="relative text-[7rem] lg:text-[10rem] text-primary">
                            <span className="absolute left-[-30%] translate-x-[30%] top-[50%] translate-y-[-50%] text-white text-[1.5rem] lg:text-[2rem]">
                                Test
                            </span>
                            04
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-[5rem] mx-[3rem] lg:mx-[8rem] border-black border-b-[1px]">
                {steps.map((item, idx) => {
                    return <Steps {...item} key={idx} />;
                })}
                <div className="p-8 flex justify-center items-center">
                    <button className="uppercase text-black rounded-3xl border-[1px] border-black py-2 px-8 text-lg hover:bg-primary hover:text-white ease-linear duration-300">
                        get a quotation
                    </button>
                </div>
            </section>
            <section className="mx-5 lg:mx-20 py-16 pb-24 border-b-[1px] border-[#000000c1]">
                <div className="flex justify-between items-center">
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
                    <h1>CASESTUDIES</h1>
                </div>
                <h1 className="text-center font-semibold text-[2rem] lg:text-[3.2rem] my-[4rem]">
                    Proudly made at CodeBase
                </h1>
                <div className="flex flex-col lg:flex-row lg:justify-around items-center">
                    <Cube />
                    <div className="lg:ml-[-5rem] mt-[4rem]">
                        <h1 className="text-[1.5rem] lg:text-[2rem] font-semibold mb-[2rem]">
                            Salah Seleem Team
                        </h1>
                        <p className="text-[1.1rem] lg:text-[1.4rem]">
                            SST is a project that provides young people from all
                            over the world with the best possible training
                            experience, using the latest scientific methods and
                            the latest organizational and technical methods. SS
                            team works on simplifying the healthy lifestyle for
                            its customers through health programs that aim for
                            enhancing their performance and productivity to
                            ensure that they become the best possible version of
                            themselves.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Web;
