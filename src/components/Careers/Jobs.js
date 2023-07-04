import React from "react";

const Jobs = ({ myCareers }) => {
    return (
        <div className="flex justify-between items-start w-[80%] mt-[-8rem]">
            <div className="jobs">
                {myCareers.map((job, idx) => {
                    return (
                        <div
                            className="w-[100%] mb-[5rem] flex flex-col gap-[1.6rem] py-[1.5rem] border-b-[1px] border-[#bdbdbd98] cursor-pointer"
                            key={idx}
                        >
                            <h1 className="font-semibold text-[1.2rem]">
                                {job.jobTitle}
                            </h1>
                            <p className="text-slate-500 lg:text-[1.2rem] lg:w-[70%]">
                                {job.description}
                            </p>
                            <div className="flex flex-col gap-[1rem] lg:flex-row lg:items-center lg:gap-[20rem]">
                                <div className="location">
                                    <h1 className="text-primary font-semibold lg:text-[1.5rem] lg:mb-[1rem]">
                                        Location
                                    </h1>
                                    <p className="lg:text-[1.3rem]">
                                        {job.location}
                                    </p>
                                </div>
                                <div className="area">
                                    <h1 className="text-primary font-semibold lg:text-[1.5rem] lg:mb-[1rem]">
                                        Area
                                    </h1>
                                    <p className="lg:text-[1.3rem]">{job.area}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Jobs;
