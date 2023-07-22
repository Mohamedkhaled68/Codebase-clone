import React from "react";
import { steps } from "../../../data/stepsData";
import Steps from "./Steps";

const StepsSce = () => {
    return (
        <section className="mt-[5rem] mx-[3rem] lg:mx-[8rem] border-black border-b-[1px]">
            {steps.map((item, idx) => {
                return <Steps {...item} key={idx} />;
            })}
            <div className="p-8 flex justify-center items-center">
                <button className="uppercase text-black rounded-3xl border-[1px] border-black py-2 px-8 text-lg hover:bg-primary hover:text-white ease-linear duration-300">
                    get a quotation
                </button>
            </div>
        </section>
    );
};

export default StepsSce;
