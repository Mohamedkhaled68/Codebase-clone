import React from "react";
import "./contactStyles.css";

const FormSide = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const styles = {
        div: "inp w-full border-b-[1px] border-[#000] relative",
        AnimateDiv: "inp w-full border-b-[1px] border-[#000] relative animate",
    };
    const handleAnimation = (e) => {
        e.target.parentElement.className = styles.AnimateDiv;
        e.target.addEventListener("blur", () => {
            if (e.target.value === 0) {
                e.target.parentElement.className = styles.div;
            }
        });
    };
    return (
        <div className="left-side flex-1 mb-[10rem]">
            <h1 className="text-[2.5rem] lg:text-[3rem] font-semibold mb-[3rem]">
                Contact Us
            </h1>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center gap-[2rem] relative"
            >
                <div className={styles.div}>
                    <span className="label absolute text-[1.5rem] top-[50%] translate-y-[-50%] left-1">
                        Name
                    </span>
                    <input
                        type="text"
                        className=" w-full py-[0.8rem] outline-none text-[1.1rem]"
                        onClick={handleAnimation}
                    />
                </div>
                <div className="emailAndPhone flex items-center gap-[4rem] w-full">
                    <div className={styles.div}>
                        <span className="label absolute text-[1.5rem] top-[50%] translate-y-[-50%] left-1">
                            Email
                        </span>
                        <input
                            type="email"
                            className=" py-[0.8rem] outline-none text-[1.1rem] w-full"
                            onClick={handleAnimation}
                        />
                    </div>
                    <div className={styles.div}>
                        <span className="label absolute text-[1.5rem] top-[50%] translate-y-[-50%] left-1">
                            Password
                        </span>
                        <input
                            type="password"
                            className=" py-[0.8rem] outline-none text-[1.1rem] w-full"
                            onClick={handleAnimation}
                        />
                    </div>
                </div>
                <div className={styles.div}>
                    <span className="label absolute text-[1.5rem] top-[50%] translate-y-[-50%] left-1">
                        Your Message
                    </span>
                    <input
                        type="text"
                        className=" w-full py-[0.8rem] outline-none text-[1.1rem]"
                        onClick={handleAnimation}
                    />
                </div>
                <button className="absolute right-0 bottom-[-8rem] mt-10 py-3 px-20 text-lg bg-white text-[#222] border-[#222] border-[0.7px] hover:bg-primary hover:text-white transition-colors ease-linear duration-300 rounded-full">
                    SEND MESSAGE
                </button>
            </form>
        </div>
    );
};

export default FormSide;
