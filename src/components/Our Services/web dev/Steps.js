import React from "react";

const Steps = ({ id, imgUrl, stepName, title, style, points }) => {
    return (
        <div className={style}>
            <div className="flex-1">
                <img src={imgUrl} alt="/" />
            </div>
            <div className="flex-1">
                <div className="flex items-center gap-[0.7rem] mb-4">
                    <div className="text-[1rem] lg:text-[1.5rem] rounded-[100%] px-3 flex justify-center items-center border-[1px] border-black">
                        {id}
                    </div>
                    <p className="text-[2rem] lg:text-[2.7rem]">{stepName}</p>
                </div>
                <h1 className="text-[1rem] lg:text-[1.3rem] lg:ml-[4rem] mb-[2rem]">{title}</h1>
                <div className="ml-[2rem] lg:ml-[5rem]">
                    <ul className="list-disc flex flex-col gap-[1rem]">
                        {points.map((point, idx) => (
                            <li key={idx} className="text-[1rem] lg:text-[1.3rem]">
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Steps;
