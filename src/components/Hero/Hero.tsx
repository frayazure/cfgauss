"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { handlee } from "@/config/fonts";
import { Autoplay, Navigation } from "swiper/modules";

import { Swiper as SwiperType } from "swiper"; // Importa el tipo correcto

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const slidesData = [
    {
      title: "Carl Friedrich Gauss",
      subtitle:
        "Matrículas Abiertas 2025, ven y se parte de un mundo que tanta buscas",
      buttonText: "Más Información",
      image: "/das.png",
    },
    {
      title: "Leonhard Euler",
      subtitle: "Inscripciones Disponibles",
      buttonText: "Conoce Más",
      image: "/das1.png",
    },
    {
      title: "Isaac Newton",
      subtitle: "Únete a Nuestra Comunidad",
      buttonText: "Explorar Ahora",
      image: "/das.png",
    },
    {
      title: "Albert Einstein",
      subtitle: "Descubre Nuestros Programas",
      buttonText: "Saber Más",
      image: "/das1.png",
    },
  ];

  // Animaciones específicas por slide
  const animations = [
    {
      title: {
        initial: { opacity: 0, x: -100 },
        animate: { opacity: 1, x: 0 },
      },
      subtitle: {
        initial: { opacity: 0, scale: 0.5 },
        animate: { opacity: 1, scale: 1 },
      },
      button: { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } },
    },
    {
      title: { initial: { opacity: 0, y: -50 }, animate: { opacity: 1, y: 0 } },
      subtitle: {
        initial: { opacity: 0, rotate: -10 },
        animate: { opacity: 1, rotate: 0 },
      },
      button: {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
      },
    },
    {
      title: {
        initial: { opacity: 0, scale: 0.3 },
        animate: { opacity: 1, scale: 1 },
      },
      subtitle: {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
      },
      button: {
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0 },
      },
    },
    {
      title: { initial: { opacity: 0, x: 100 }, animate: { opacity: 1, x: 0 } },
      subtitle: {
        initial: { opacity: 0, scale: 1.2 },
        animate: { opacity: 1, scale: 1 },
      },
      button: {
        initial: { opacity: 0, y: -30 },
        animate: { opacity: 1, y: 0 },
      },
    },
  ];

  return (
    <div className="cursor-default flex justify-center items-center py-4">
      <div className="w-full mx-auto">
        <Swiper
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          spaceBetween={0}
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={1}
          className="mySwiper h-[74vh]"
          loopAdditionalSlides={1}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide
              key={index}
              onMouseEnter={() => swiperRef.current?.autoplay.pause()}
              onMouseLeave={() => swiperRef.current?.autoplay.resume()}
            >
              <div
                className={`h-full min-h-[500px] overflow-hidden bg-[url("/background.png")] bg-cover lg:bg-center bg-[position:calc(50%+160px)_center] ${handlee.className}`}
              >
                {/* Contenedor principal con flex-col en móvil y row en lg */}
                <div className="container mx-auto px-4 h-full flex flex-col lg:flex-row lg:items-center">
                  {/* Texto siempre arriba en móvil, a la izquierda en desktop */}
                  <div className="w-full lg:w-2/5 pt-8 lg:pt-0 ">
                    {activeIndex === index && (
                      <div className="text-center lg:text-left">
                        <motion.h4
                          className="text-lg md:text-xl font-bold text-white tracking-wider"
                          initial={animations[index].title.initial}
                          animate={animations[index].title.animate}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                          {slide.title}
                        </motion.h4>

                        <motion.h1
                          className="font-bold mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white leading-tight"
                          initial={animations[index].subtitle.initial}
                          animate={animations[index].subtitle.animate}
                          transition={{
                            duration: 1,
                            delay: 0.3,
                            ease: "easeOut",
                          }}
                        >
                          {slide.subtitle}
                        </motion.h1>

                        <motion.button
                          className="cursor-pointer mt-6 inline-block bg-blue-500 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-md"
                          initial={animations[index].button.initial}
                          animate={animations[index].button.animate}
                          transition={{
                            duration: 0.8,
                            delay: 0.6,
                            ease: "easeOut",
                          }}
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
                          {slide.buttonText}
                        </motion.button>
                      </div>
                    )}
                  </div>

                  {/* Imagen siempre abajo en móvil, a la derecha en desktop */}
                  <div className="w-full lg:w-3/5 mt-auto lg:mt-0 flex justify-center lg:justify-end lg:items-center ">
                    <motion.img
                      className="max-w-full w-auto h-auto p-2 md:p-0 object-contain  lg:max-h-[70vh] lg:min-h-[73vh]"
                      src={slide.image}
                      alt="Éxitos"
                      initial={{ opacity: 0, y: 50, x: 0 }}
                      animate={
                        activeIndex === index ? { opacity: 1, y: 0, x: 0 } : {}
                      }
                      transition={{
                        duration: 1,
                        delay: 0.5,
                        ease: "easeOut",
                      }}
                    />
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
