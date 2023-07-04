import React, { useState } from "react";
import Jobs from "./Jobs";
import { jobsCategory } from "../../data/CareersData";
import { careers } from "../../data/CareersData";

const Header = () => {
    const [myCareers, setMyCareers] = useState(careers);
    const [selection, setSelection] = useState("All Jobs");
    const filterJobs = (type) => {
        jobsCategory.map((jobCate) => {
            if (type === jobCate) {
                if (jobCate == "All Jobs") {
                    setSelection("All Jobs");
                    setMyCareers(careers);
                } else {
                    setMyCareers(
                        careers.filter((job) => job.category == jobCate)
                    );
                    setSelection(type);
                }
            }
        });
    };
    return (
        <>
            <div className="px-[2rem] lg:px-[5rem] lg:pr-[20rem] mt-[3rem]">
                <div className="flex justify-between items-baseline ">
                    <h1 className="text-[3rem] font-semibold mb-[3rem]">
                        Careers
                    </h1>
                    <div className="selectors">
                        <h1 className="text-[1.5rem] font-semibold mb-[3rem] text-primary">
                            All Jobs
                        </h1>
                        <ul className="list-none flex flex-col gap-[1rem]">
                            {jobsCategory.map((category, idx) => {
                                return (
                                    <li
                                        className={
                                            selection === category
                                                ? "text-[1.07rem] cursor-pointer hover:translate-x-[10%] text-primary duration-500"
                                                : "text-[1.07rem] cursor-pointer hover:translate-x-[10%] hover:text-primary duration-500"
                                        }
                                        key={idx}
                                        onClick={() => filterJobs(category)}
                                    >
                                        {category}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <Jobs myCareers={myCareers} />
            </div>
        </>
    );
};

export default Header;
