"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState } from "react";

import "swiper/css";
import "swiper/css/navigation";

import { handlee } from "@/config/fonts";
import { Autoplay, Navigation } from "swiper/modules";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex justify-center items-center py-4">
      <div className="w-[100%] mx-auto">
        <Swiper
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          spaceBetween={0}
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={1}
          loopAdditionalSlides={1}
          className="mySwiper h-[74vh]"
        >
          {[0, 1, 2, 3].map((index) => (
            <SwiperSlide key={index}>
              <div
                className={`h-full min-h-[500px] overflow-hidden bg-[url("/background.png")] bg-cover  lg:bg-center bg-[position:calc(50%+160px)_center] flex items-center ${handlee.className}`}
              >
                <div className="container mx-auto px-4">
                  <div className="flex flex-col md:flex-row w-full items-center">
                    <div className="w-full md:w-1/2 mb-8 md:mb-0">
                      <h4
                        className={`text-lg md:text-xl font-bold text-white tracking-wider ${
                          activeIndex === index ? "animate-fadeIn" : "opacity-0"
                        }`}
                        style={{ animationDelay: "0.3s" }}
                      >
                        Carl Friedrich Gauss
                      </h4>
                      <h1
                        className={`font-bold mt-2 md:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white leading-tight shadow-sm ${
                          activeIndex === index
                            ? "animate-slideUp"
                            : "opacity-0"
                        }`}
                        style={{
                          animationDelay: "0.5s",
                          textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                        }}
                      >
                        Estudia en el colegio Gauss y asegura tu ingreso a la
                        Universidad.
                      </h1>

                      <a
                        className={`mt-6 inline-block bg-blue-500 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-md ${
                          activeIndex === index ? "animate-fadeIn" : "opacity-0"
                        }`}
                        style={{
                          animationDelay: "0.8s",
                          transform: "scale(1)",
                          transition: "transform 0.3s",
                        }}
                        onMouseOver={(e) =>
                          (e.currentTarget.style.transform = "scale(1.05)")
                        }
                        onMouseOut={(e) =>
                          (e.currentTarget.style.transform = "scale(1)")
                        }
                      >
                        Leer más
                      </a>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                      <img
                        className={`max-w-full h-auto p-2 md:p-5 ${
                          activeIndex === index ? "animate-fadeIn" : "opacity-0"
                        }`}
                        style={{ animationDelay: "0.7s" }}
                        src={index % 2 === 0 ? "/das.png" : "/das1.png"}
                        alt="Éxitos"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
