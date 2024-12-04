import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

export const Testimonials = () => {
  return (
    <div className="bg-primary py-20 lato">
      <div className="text-center font-bold mb-10">
        <h2 className="text-white text-6xl font-bold playfair ">
          Our Testimonials
        </h2>
        <p className="text-2xl font-semibold text-white mt-6">
          Some of the feedback we've received about our{" "}
          <span className="text-secondary">consultancy.</span>
        </p>
      </div>
      <div className="w-8/12 mx-auto mt-10">
        <Swiper
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6 h-full lg:h-[225px] flex flex-col">
              <div className="w-full flex mb-4 items-center">
                <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                  <img src="https://i.pravatar.cc/100?img=1" alt="" />
                </div>
                <div className="flex-grow pl-3">
                  <h6 className="font-bold text-base uppercase text-gray-600">
                    Kenzie Edgar.
                  </h6>
                </div>
              </div>
              <div className="w-full flex-grow">
                <p className="text-lg leading-tight">
                  <span className="text-xl leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  VisaEase made my visa application process so easy and
                  stress-free. Their expert team guided me every step of the way
                  and ensured everything was perfect!
                  <span className="text-xl leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6 h-full lg:h-[225px] flex flex-col">
              <div className="w-full flex mb-4 items-center">
                <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                  <img src="https://i.pravatar.cc/100?img=2" alt="" />
                </div>
                <div className="flex-grow pl-3">
                  <h6 className="font-bold text-base uppercase text-gray-600">
                    Stevie Tifft.
                  </h6>
                </div>
              </div>
              <div className="w-full flex-grow">
                <p className="text-lg leading-tight">
                  <span className="text-xl leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  I couldn't be happier with VisaEase's service. From start to
                  finish, they provided clear communication and support, leading
                  to a successful visa approval!
                  <span className="text-xl leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6 h-full lg:h-[225px] flex flex-col">
              <div className="w-full flex mb-4 items-center">
                <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                  <img src="https://i.pravatar.cc/100?img=3" alt="" />
                </div>
                <div className="flex-grow pl-3">
                  <h6 className="font-bold text-base uppercase text-gray-600">
                    Alex Johnson
                  </h6>
                </div>
              </div>
              <div className="w-full flex-grow">
                <p className="text-lg leading-tight">
                  <span className="text-xl leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  VisaEase made my application process smooth and stress-free.
                  Their team was always available to answer my questions. Thanks
                  again.
                  <span className="text-xl leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6 h-full lg:h-[225px] flex flex-col">
              <div className="w-full flex mb-4 items-center">
                <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                  <img src="https://i.pravatar.cc/100?img=5" alt="" />
                </div>
                <div className="flex-grow pl-3">
                  <h6 className="font-bold text-base uppercase text-gray-600">
                    Maria Gonzalez
                  </h6>
                </div>
              </div>
              <div className="w-full flex-grow">
                <p className="text-lg leading-tight">
                  <span className="text-xl leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  Exceptional service and guidance throughout the visa process!
                  VisaEase truly cares about their clients, and it shows in
                  every interaction. I would love to use it again.
                  <span className="text-xl leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6 h-full lg:h-[225px] flex flex-col">
              <div className="w-full flex mb-4 items-center">
                <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                  <img src="https://i.pravatar.cc/100?img=7" alt="" />
                </div>
                <div className="flex-grow pl-3">
                  <h6 className="font-bold text-base uppercase text-gray-600">
                    David Lee
                  </h6>
                </div>
              </div>
              <div className="w-full flex-grow">
                <p className="text-lg leading-tight">
                  <span className="text-xl leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  I highly recommend VisaEase! Their expertise and attention to
                  detail ensured my application was approved on time. Fantastic
                  experience!
                  <span className="text-xl leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6 h-full lg:h-[225px] flex flex-col">
              <div className="w-full flex mb-4 items-center">
                <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                  <img src="https://i.pravatar.cc/100?img=8" alt="" />
                </div>
                <div className="flex-grow pl-3">
                  <h6 className="font-bold text-base uppercase text-gray-600">
                    Emily Carter
                  </h6>
                </div>
              </div>
              <div className="w-full flex-grow">
                <p className="text-lg leading-tight">
                  <span className="text-xl leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  The team at VisaEase was incredibly professional and
                  supportive. They helped me every step of the way, and I
                  couldn’t be happier with the outcome!
                  <span className="text-xl leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6 h-full lg:h-[225px] flex flex-col">
              <div className="w-full flex mb-4 items-center">
                <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                  <img src="https://i.pravatar.cc/100?img=9" alt="" />
                </div>
                <div className="flex-grow pl-3">
                  <h6 className="font-bold text-base uppercase text-gray-600">
                    Michael Thompson
                  </h6>
                </div>
              </div>
              <div className="w-full flex-grow">
                <p className="text-lg leading-tight">
                  <span className="text-xl leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  VisaEase turned what seemed like a complicated process into
                  something simple and straightforward. Their dedication is
                  unmatched.
                  <span className="text-xl leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6 h-full lg:h-[225px] flex flex-col">
              <div className="w-full flex mb-4 items-center">
                <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                  <img src="https://i.pravatar.cc/100?img=10" alt="" />
                </div>
                <div className="flex-grow pl-3">
                  <h6 className="font-bold text-base uppercase text-gray-600">
                    Sophia Martinez
                  </h6>
                </div>
              </div>
              <div className="w-full flex-grow">
                <p className="text-lg leading-tight">
                  <span className="text-xl leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  I was amazed by how seamless the process was with VisaEase.
                  Their platform is user-friendly, and their team truly cares
                  about their clients.
                  <span className="text-xl leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
