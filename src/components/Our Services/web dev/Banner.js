import React from "react";

const Banner = () => {
    return (
        <section className="w-full">
            <div className="ml-[1rem] lg:ml-[7rem] flex items-center gap-3 mb-[5rem]">
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
    );
};

export default Banner;
