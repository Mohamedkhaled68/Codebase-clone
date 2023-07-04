import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel } from "swiper/core";
import { logoCarousel } from "../../../data/logoCarouselData";
import { Autoplay } from "swiper";

import "swiper/css";

import "./logoCarouselStyles.css";
SwiperCore.use([Mousewheel]);

const LogoCarousel = () => {
    return (
        <div className="logos">
            <Swiper
                mousewheel={true}
                className="mySwiper"
                autoplay={{
                    delay: 500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                loop={true}
                slidesPerView={7}
                spaceBetween={10}
                grabCursor={true}
            >
                {logoCarousel.map(({ imgUrl }, idx) => {
                    return (
                        <SwiperSlide
                            key={idx}
                            className="text-center text-[18px] bg-[#fff] flex justify-center items-center"
                        >
                            <div className="cont relative">
                                <img
                                    src={imgUrl}
                                    alt="/"
                                    className=""
                                />
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default LogoCarousel;
