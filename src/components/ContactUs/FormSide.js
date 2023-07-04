import React from "react";

const FormSide = () => {
    return (
        <div className="left-side flex-1">
            <h1 className="text-[3rem] font-semibold mb-[3rem]">Contact Us</h1>
            <div className="flex flex-col items-center gap-[1rem]">
                <div className="name w-full">
                    <input
                        type="text"
                        className="border-b-[1px] border-[#000] w-full py-[0.8rem] outline-none text-[1.1rem]"
                    />
                </div>
                <div className="emailAndPhone flex items-center gap-[1rem] w-full">
                    <input
                        type="text"
                        className="border-b-[1px] border-[#000]  py-[0.8rem] outline-none text-[1.1rem] w-1/2"
                    />
                    <input
                        type="text"
                        className="border-b-[1px] border-[#000]  py-[0.8rem] outline-none text-[1.1rem] w-1/2"
                    />
                </div>
                <div className="message w-full">
                    <input
                        type="text"
                        className="border-b-[1px] border-[#000] w-full py-[0.8rem] outline-none text-[1.1rem]"
                    />
                </div>
            </div>
        </div>
    );
};

export default FormSide;
