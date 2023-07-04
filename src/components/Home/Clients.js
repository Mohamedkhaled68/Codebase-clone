import React from "react";
import LogoCarousel from "./logoCarousel/LogoCarousel";

const Clients = () => {
    return (
        <>
            <section className="mx-5 lg:mx-20 py-16 pb-24">
                <div className="flex justify-between items-center">
                    <div className="flex justify-start items-center gap-3">
                        <div className="rounded-full w-10 h-10 flex justify-center items-center border-[1px] border-[#000]">
                            <img
                                className="w-5"
                                src="https://codebase-tech.com/wp-content/themes/asooltech/dist/codebase/images/sm-logo.png"
                                alt="/"
                            />
                        </div>
                        <div className="hidden rounded-3xl py-[7px] px-3 lg:flex justify-center items-center border-[1px] border-[#000]">
                            <h1>Clients</h1>
                        </div>
                    </div>
                </div>
                <h1 className="text-center text-[2.2rem] font-[400] my-5 uppercase">
                    Latest Clients
                </h1>
                <div className="mt-[7rem] w-full">
                    <LogoCarousel />
                </div>
            </section>
        </>
    );
};

export default Clients;
