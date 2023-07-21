import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "./styles.css";

import { Autoplay, EffectCube, Pagination } from "swiper";

const Cube = () => {
    return (
        <div className="mx-[7rem] lg:ml-[-8rem] flex justify-center items-center">
            <Swiper
                loop={true}
                effect={"cube"}
                grabCursor={true}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={true}
                modules={[Autoplay, EffectCube, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://codebase-tech.com/wp-content/uploads/2022/08/identity-1.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://codebase-tech.com/wp-content/uploads/2022/08/identity-6.png" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://codebase-tech.com/wp-content/uploads/2022/08/identity-2.png" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Cube;
