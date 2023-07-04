import React from "react";
import ServicesCard from "./ServicesCard";
import { services } from "../../data/ourServices";

const Services = () => {
    return (
        <>
            <section className="lg:mx-20 mt-10 pb-24 border-b-[1px] border-[#000000c1]">
                <h1 className="text-center mb-8 text-[2rem] md:text-[3rem] text-gray-900 font-[500]">
                    Our Services
                </h1>
                <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10 lg:mx-[4rem]">
                    {services.map((serv, idx) => {
                        return <ServicesCard key={idx} {...serv} />;
                    })}
                </div>
            </section>
        </>
    );
};

export default Services;
