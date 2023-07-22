import React from "react";
import Cube from "./Cube";

const CubeSec = () => {
    return (
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
                <div className="lg:ml-[-10rem] xl:ml-[-15rem] mt-[4rem]">
                    <h1 className="text-[1.5rem] lg:text-[2rem] font-semibold mb-[2rem]">
                        Salah Seleem Team
                    </h1>
                    <p className="text-[1.1rem] lg:text-[1.4rem]">
                        SST is a project that provides young people from all
                        over the world with the best possible training
                        experience, using the latest scientific methods and the
                        latest organizational and technical methods. SS team
                        works on simplifying the healthy lifestyle for its
                        customers through health programs that aim for enhancing
                        their performance and productivity to ensure that they
                        become the best possible version of themselves.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CubeSec;
