import React from "react";
import ImgCarousel from "./imgCarousel/ImgCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./styleArrow.css";

const OurWork = () => {
    return (
        <>
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
                    <h1>LATEST WORK</h1>
                </div>
                <h1 className="text-center text-[2.2rem] font-[400] my-5">
                    OurWork
                </h1>
                <div className="mt-10 relative  flex justify-center items-center">
                    <div className="hidden absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] md:flex justify-center z-[-20] items-center ">
                        <span className="md:text-[17rem] lg:text-[22rem] xl:text-[27rem] text-[#5d5d5d31] user-select-none ">
                            WORK
                        </span>
                    </div>
                    <ImgCarousel />
                </div>
                <div className="arrow-parent relative w-full flex justify-center items-baseline mt-20 cursor-pointer">
                    <h1 className="text-[1.8rem] underline">MORE WORK</h1>
                    <FontAwesomeIcon
                        icon={faArrowRight}
                        width={30}
                        className="arrow ml-3 text-xl"
                    />
                </div>
            </section>
        </>
    );
};

export default OurWork;
