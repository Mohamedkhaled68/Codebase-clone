import React from "react";
import { workGallary } from "../../data/WorkGallary";

const Gallary = () => {
    return (
            <div className="flex flex-col items-center gap-[5rem] mb-[4rem]">
                {workGallary.map(({ imgUrl, titleBtn, type }, idx) => {
                    return (
                        <div
                            className="w-[95%] h-[300px] md:w-[80%] md:h-[400px] lg:w-[60%] relative flex items-end"
                            key={idx}
                        >
                            <div className="flex flex-col items-start justify-center gap-2 md:flex-row md:justify-between md:items-center z-50 w-full p-5">
                                <button className="text-white rounded-3xl border-[1px] border-white py-2 px-3 md:px-10 lg:px-14 hover:bg-white hover:text-primary ease-linear duration-700">
                                    {titleBtn}
                                </button>
                                <p className="text-white text-[1rem]">{type}</p>
                            </div>
                            <img
                                src={imgUrl}
                                alt="/"
                                className="absolute top-0 left-0 w-full h-full z-0 object-cover"
                            />
                        </div>
                    );
                })}
            </div>
    );
};

export default Gallary;
