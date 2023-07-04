import React from "react";
import Gallary from "./Gallary";

const Header = () => {
    return (
        <>
            <div className="px-[2rem] lg:px-[5rem] mt-[3rem]">
                <h1 className="text-[3rem] font-semibold mb-[3rem]">
                    Our Work
                </h1>
                <Gallary />
            </div>
        </>
    );
};

export default Header;
