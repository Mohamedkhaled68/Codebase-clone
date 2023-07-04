import React from "react";
import Gallary from "./Gallary";

const Header = () => {
    return (
        <>
            <div className="px-[5rem] mt-[3rem]">
                <h1 className="text-[3rem] font-semibold mb-[3rem]">
                    Our Work
                </h1>
                <div className="container mx-auto flex justify-center items-center gap-[2rem] mb-[4rem]">
                    <button className="text-black rounded-3xl border-[1px] border-black py-2 px-8">
                        All
                    </button>
                    <button className="text-black rounded-3xl border-[1px] border-black py-2 px-10 ">
                        Websites
                    </button>
                    <button className="text-black rounded-3xl border-[1px] border-black py-2 px-10 ">
                        Mobile Applications
                    </button>
                    <button className="text-black rounded-3xl border-[1px] border-black py-2 px-10 ">
                        Branding
                    </button>
                </div>
            </div>
            <Gallary />
        </>
    );
};

export default Header;
