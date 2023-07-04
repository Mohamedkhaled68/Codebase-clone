import React from "react";

const FormSide = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className="left-side flex-1">
            <h1 className="text-[3rem] font-semibold mb-[3rem]">Contact Us</h1>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center gap-[2rem] relative"
            >
                <div className="name w-full">
                    <input
                        type="text"
                        className="border-b-[1px] border-[#000] w-full py-[0.8rem] outline-none text-[1.1rem]"
                    />
                </div>
                <div className="emailAndPhone flex items-center gap-[7rem] w-full">
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
                <button className="absolute right-0 bottom-[-8rem] mt-10 py-3 px-20 text-lg bg-white text-[#222] border-[#222] border-[0.7px] hover:bg-primary hover:text-white transition-colors ease-linear duration-300 rounded-full">
                    SEND MESSAGE
                </button>
            </form>
        </div>
    );
};

export default FormSide;
