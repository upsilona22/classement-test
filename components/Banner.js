import React from 'react';
import './Banner.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper';
const Banner = () => {
    return (
        <div id='header'>
            <Swiper
                slidesPerView={3} // ekhne 3 er jaigai 1 dile 1 ta div er slide show krbe
                spaceBetween={30}
                slidesPerGroup={3} // ekhne 3 er jaigai 1 dile 1 ta div er slide show krbe
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>Slide 1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. </SwiperSlide>
                <SwiperSlide>Slide 2Slide 1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam dolor, delectus doloremque inventore in</SwiperSlide>
                <SwiperSlide>Slide 3Slide 1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam dolor, delectus doloremque inventore</SwiperSlide>
                <SwiperSlide>Slide 4Slide 1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam dolor, delectus doloremque inventore in</SwiperSlide>
                <SwiperSlide>Slide 5Slide 1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam dolor, delectus doloremque inventore in,</SwiperSlide>
                <SwiperSlide>Slide 6Slide 1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam dolor, delectus doloremque inventore in,</SwiperSlide>
                <SwiperSlide>Slide 7Slide 1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam dolor, delectus doloremque inventore in, </SwiperSlide>
                <SwiperSlide>Slide 8Slide 1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam dolor, delectus doloremque inventore in, laudantium aut officia molestias consequuntur sit, deleniti aperiam? Modi, corrupti consequuntur labore c</SwiperSlide>
                <SwiperSlide>Slide 9Slide</SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
