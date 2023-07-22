import React, { useState } from "react";
import { jobsCategory } from "../../data/CareersData";
import { careers } from "../../data/CareersData";
import JobsSide from "./JobsSide";
import CategoriesSide from "./CategoriesSide";

const Header = () => {
    const [myCareers, setMyCareers] = useState(careers);
    const [selection, setSelection] = useState("All Jobs");
    const filterJobs = (type) => {
        jobsCategory.map((jobCate) => {
            if (type === jobCate) {
                if (jobCate === "All Jobs") {
                    setSelection("All Jobs");
                    setMyCareers(careers);
                } else {
                    setMyCareers(
                        careers.filter((job) => job.category === jobCate)
                    );
                    setSelection(type);
                }
            }
        });
    };
    return (
        <>
            <div className="main-page flex flex-col-reverse lg:flex-row lg:items-baseline gap-[1rem] px-[2rem] lg:px-[5rem] mt-[3rem]">
                <JobsSide myCareers={myCareers} />
                <CategoriesSide
                    jobsCategory={jobsCategory}
                    selection={selection}
                    filterJobs={filterJobs}
                />
            </div>
        </>
    );
};

export default Header;
