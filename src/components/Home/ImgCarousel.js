import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Mousewheel } from 'swiper/core';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Pagination } from 'swiper';
import { carousel } from '../../data/imgCarousel';
SwiperCore.use([Mousewheel]);

const ImgCarousel = () => {
    return (
        <>
            <Swiper
                style={{
                    '--swiper-pagination-color': '#fff',
                    '--swiper-pagination-bullet-inactive-color': '#999999',
                    '--swiper-pagination-bullet-inactive-opacity': '10',
                    '--swiper-pagination-bullet-size': '8px',
                }}
                direction={'vertical'}
                mousewheel={true}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {carousel.map(({ imgUrl, titleBtn, type }, idx) => {
                    return (
                        <SwiperSlide key={idx}>
                            <div className="cont relative flex items-end">
                                <div className="flex justify-between items-center z-50 w-full p-5">
                                    <button className="text-white rounded-3xl border-[1px] border-white py-2 px-14 hover:bg-white hover:text-primary ease-linear duration-700">
                                        {titleBtn}
                                    </button>
                                    <p className="text-white text-[1rem]">
                                        {type}
                                    </p>
                                </div>
                                <img
                                    src={imgUrl}
                                    alt="/"
                                    className="absolute top-0 left-0 w-full h-full z-0"
                                />
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
};

export default ImgCarousel;
