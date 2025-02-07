import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { Typewriter } from "react-simple-typewriter";

export const Testimonials = () => {
  return (
    <div className="bg-primary py-10 md:py-20 lato">
      <div className="text-center font-bold mb-10">
        <h2 className="text-white text-4xl md:text-6xl font-bold playfair">
          Our Testimonials
        </h2>
        <p className="text-2xl font-semibold text-white mt-6">
          Some of the feedback we've received about our{" "}
          <span className="text-secondary">
            <Typewriter
              typeSpeed={75}
              cursor={true}
              loop={true}
              cursorBlinking={true}
              words={["consultancy."]}
            ></Typewriter>
          </span>
        </p>
      </div>
      <div className="w-11/12 lg:w-8/12 mx-auto mt-10">
        <Swiper
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          loop={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
        >
          <SwiperSlide>
            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6 flex flex-col h-[225px]">
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
                  <Typewriter
                    typeSpeed={10}
                    cursor={true}
                    cursorBlinking={true}
                    words={[
                      "VisaEase made my visa application process so easy and stress free. Their expert team guided me every step of the way and ensured everything was perfect",
                    ]}
                  ></Typewriter>

                  <span className="text-xl leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6 flex flex-col h-[225px]">
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
                  <Typewriter
                    typeSpeed={10}
                    cursor={true}
                    cursorBlinking={true}
                    words={[
                      "I couldn't be happier with VisaEase's service. From start to finish, they provided clear communication and support, leading to a successful visa approval!",
                    ]}
                  ></Typewriter>

                  <span className="text-xl leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6 flex flex-col h-[225px]">
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
                  <Typewriter
                    typeSpeed={10}
                    cursor={true}
                    cursorBlinking={true}
                    words={[
                      "VisaEase made my application process smooth and stress-free. Their team was always available to answer my questions. Thanks again.",
                    ]}
                  ></Typewriter>
                  <span className="text-xl leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6 flex flex-col h-[225px]">
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
                  <Typewriter
                    typeSpeed={10}
                    cursor={true}
                    cursorBlinking={true}
                    words={[
                      "Exceptional service and guidance throughout the visa process! VisaEase truly cares about their clients, and it shows in every interaction. I would love to use it again.",
                    ]}
                  ></Typewriter>

                  <span className="text-xl leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6 flex flex-col h-[225px]">
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
                  <Typewriter
                    typeSpeed={10}
                    cursor={true}
                    cursorBlinking={true}
                    words={[
                      "I highly recommend VisaEase! Their expertise and attention to detail ensured my application was approved on time. Fantastic experience!",
                    ]}
                  ></Typewriter>
                  <span className="text-xl leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6 flex flex-col h-[225px]">
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
            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6 flex flex-col h-[225px]">
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
                  <Typewriter
                    typeSpeed={10}
                    cursor={true}
                    cursorBlinking={true}
                    words={[
                      "VisaEase turned what seemed like a complicated process into something simple and straightforward. Their dedication is unmatched.",
                    ]}
                  ></Typewriter>
                  <span className="text-xl leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6 flex flex-col h-[225px]">
              <div className="w-full flex mb-4 items-center">
                <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                  <img src="https://i.pravatar.cc/100?img=10" alt="" />
                </div>
                <div className="flex-grow pl-3">
                  <h6 className="font-bold text-base uppercase text-gray-600">
                    Sofia Martinez
                  </h6>
                </div>
              </div>
              <div className="w-full flex-grow">
                <p className="text-lg leading-tight">
                  <span className="text-xl leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  <Typewriter
                    typeSpeed={10}
                    cursor={true}
                    cursorBlinking={true}
                    words={[
                      "My experience with VisaEase was top-notch. They provided clear guidance at every stage, making my visa application a breeze. Highly recommended!",
                    ]}
                  ></Typewriter>
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
