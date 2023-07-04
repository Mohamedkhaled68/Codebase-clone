import React from "react";
import { workGallary } from "../../data/WorkGallary";
import { useState } from "react";

const Gallary = () => {
    const [gallary, setGallary] = useState(workGallary);
    const [selection, setSelection] = useState("All");
    const categories = ["All", "Websites", "Mobile Applications", "Branding"];
    const filterImages = (category) => {
        categories.map((cate) => {
            if (category === cate) {
                if (cate == "All") {
                    setSelection("All");
                    setGallary(workGallary);
                } else {
                    setGallary(
                        workGallary.filter((slide) =>
                            slide.type.includes(category)
                        )
                    );
                    setSelection(category);
                }
            }
        });

        // old version of filter function ==>>

        // if (category === "All") {
        //     setGallary(workGallary);
        //     setSelection(category);
        // } else if (category === "Websites") {
        //     setGallary(
        //         workGallary.filter((slide) => slide.type.includes(category))
        //     );
        //     setSelection(category);
        // } else if (category === "Mobile Applications") {
        //     setGallary(
        //         workGallary.filter((slide) => slide.type.includes(category))
        //     );
        //     setSelection(category);
        // } else if (category === "Branding") {
        //     setGallary(
        //         workGallary.filter((slide) => slide.type.includes(category))
        //     );
        //     setSelection(category);
        // } else {
        //     setGallary(workGallary);
        //     setSelection("All");
        // }
    };
    return (
        <>
            <div className="container mx-auto flex justify-center items-center gap-[0.1rem] mb-[4rem] md:gap-[1rem] lg:gap-[4rem]">
                {categories.map((category, idx) => {
                    return (
                        <button
                            className={
                                selection === category
                                    ? "text-black text-[0.9rem] md:text-[1rem] px-4 lg:px-8 lg:text-[1.1rem] rounded-3xl border-[1px] border-black py-2 transition-all duration-300"
                                    : "text-black text-[0.9rem] md:text-[1rem] px-4 lg:px-8 lg:text-[1.1rem] rounded-3xl py-2"
                            }
                            key={idx}
                            onClick={() => filterImages(category)}
                        >
                            {category}
                        </button>
                    );
                })}
            </div>
            <div className="flex flex-col items-center gap-[5rem] mb-[4rem]">
                {gallary.map(({ imgUrl, titleBtn, type }, idx) => {
                    return (
                        <div
                            className="w-[95%] h-[300px] md:w-[80%] md:h-[400px] relative flex items-end"
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
        </>
    );
};

export default Gallary;
