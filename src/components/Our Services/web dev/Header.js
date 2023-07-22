import React from "react";

const Header = () => {
    return (
        <section className="mx-[2rem] mb-[5rem] lg:mx-[6rem] py-[5rem] border-black border-b-[1px]">
            <h1 className="text-xl mb-2">Our Services</h1>
            <p className="font-semibold text-3xl lg:text-6xl">
                Web Development
            </p>
            <div className="lg:mx-[1.5rem] flex flex-col md:flex-row md:justify-center items-center mt-[4rem] gap-[3rem] lg:gap-[5rem]">
                <div className="w-full h-[350px] lg:h-full">
                    <img
                        className="w-full h-full object-cover"
                        src="https://codebase-tech.com/wp-content/uploads/2023/01/WD.jpg"
                    />
                </div>
                <p className="text-center lg:text-left text-[1.8rem] lg:text-[5rem] lg:w-[50%] leading-[2.5rem] lg:leading-[5.3rem] font-semibold">
                    Your visually appealing easy to navigate well performance
                    website is almost ready with our team.
                </p>
            </div>
            <div className="text-center flex flex-col items-center mt-[5rem] gap-[3rem]">
                <p className="text-[1.7rem] lg:text-[3.5rem] font-normal">
                    Create a website to extend your reach to everyone in the
                    world.
                </p>
                <p className="text-[1.2rem] lg:text-[1.7rem] leading-[2rem] md:leading-[2.5rem]">
                    Starting from information gathering, ending by the
                    launching, with focusing on every single detail in between
                    steps that may cause any issue for your business or your
                    customer, we help you create a going concern business in
                    this highly competitive marketplace.
                </p>
                <button className="uppercase text-black rounded-3xl border-[1px] border-black py-2 px-8 text-lg hover:bg-primary hover:text-white ease-linear duration-300">
                    get a quotation
                </button>
            </div>
        </section>
    );
};

export default Header;
