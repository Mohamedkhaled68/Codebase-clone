import React from "react";
import Footer from "../components/Home/Footer";
import Services from "../components/Home/Services";

const AboutUs = () => {
    return (
        <>
            <div className="px-[2rem] lg:px-[5rem] mt-[3rem]">
                <h1 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-semibold mb-[2rem]">
                    About Us
                </h1>
            </div>
            <section className="container mx-auto py-10">
                <div className="w-full max-h-[500px]">
                    <img
                        src="https://codebase-tech.com/wp-content/uploads/2023/01/11111-2.png"
                        alt="/"
                        className="w-full h-full object-cover"
                    />
                </div>
                <p className="text-center mt-[3rem] text-[0.9rem] md:text-[1.16rem] mx-7 md:mx-10 lg:mx-[17rem]">
                    From an idea, to a full project, with 24/7 support for your
                    project, that’s what we have been doing since 2020, by a 40
                    person-team , a high quality, a variety of services, a full
                    stack of tools. Our team will leverage the multiple use
                    cases and skillsets under their belt to achieve results you
                    seek. What does your business need to grow? Is it marketing?
                    Branding? Software production? you name it, we give you a
                    one-stop for all your business needs with the best of the
                    best in each speciality.
                </p>
            </section>
            <Services />
            <Footer />
        </>
    );
};

export default AboutUs;
