import React from "react";

const CategoriesSide = ({jobsCategory, filterJobs, selection}) => {
    return (
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
    );
};

export default CategoriesSide;
