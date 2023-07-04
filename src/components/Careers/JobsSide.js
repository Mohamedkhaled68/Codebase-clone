import React from "react";
import Jobs from "./Jobs";

const JobsSide = ({ myCareers }) => {
    return (
        <div className="left-side flex-1">
            <h1 className="text-[3rem] font-semibold mb-[10rem]">Careers</h1>
            <Jobs myCareers={myCareers} />
        </div>
    );
};

export default JobsSide;
