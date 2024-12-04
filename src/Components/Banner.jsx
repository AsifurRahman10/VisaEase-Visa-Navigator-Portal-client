import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from "../assets/slide-1.jpg";
import img2 from "../assets/slide-2.jpg";
import img3 from "../assets/slide-3.jpg";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
export const Banner = () => {
  return (
    <div className="min-h-screen lg:max-h-[800px]">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="min-h-screen lg:max-h-[800px] w-full" src={img1} />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-start text-white ml-12 lg:ml-32">
            <div className="px-6 py-2 bg-primary ">
              <p className="font-bold">You trust is our motivation</p>
            </div>
            <h2 className="text-2xl lg:text-6xl font-bold mt-4 playfair mb-2 lg:mb-4 lg:w-1/2 ">
              Your Gateway to Global Opportunities
            </h2>
            <p className="text-lg font-semibold leto">
              Explore Boundaries Without Barriers
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="min-h-screen lg:max-h-[800px] w-full" src={img2} />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-start text-white ml-12 lg:ml-32">
            <div className="px-6 py-2 bg-primary ">
              <p className="font-bold">You trust is our motivation</p>
            </div>
            <h2 className="text-2xl lg:text-6xl font-bold playfair mb-4 lg:w-1/2 mt-4 ">
              Visas Made Easy, Journeys Made Memorable
            </h2>
            <p className="text-lg font-semibold leto mr-4 lg:mr-4 ">
              From Application to Arrival—We've Got You Covered
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="min-h-screen lg:max-h-[800px] w-full" src={img3} />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-start text-white ml-12 lg:ml-32">
            <div className="px-6 py-2 bg-primary  ">
              <p className="font-bold">You trust is our motivation</p>
            </div>
            <h2 className="text-2xl lg:text-6xl font-bold playfair mb-4 lg:w-1/2  mt-4">
              Seamless Visa Solutions for Every Destination
            </h2>
            <p className="text-lg font-semibold leto mr-4 lg:mr-4 ">
              Bridging the Gap Between You and Your Destination
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
