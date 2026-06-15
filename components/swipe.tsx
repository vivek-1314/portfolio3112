"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";

import "swiper/css";

const cards = [
  {
    title: "OCHI",
    image: "images/demo_img7.png",
  },
  {
    title: "ORION",
    image: "images/demo_img9.png",
  },
  {
    title: "NODEX",
    image: "images/demo_img5.png",
  },
  {
    title: "OCHI",
    image: "images/demo_img6.png",
  },
  {
    title: "LEETX",
    image: "images/demo_img1.png",
  },
  {
    title: "NODEX",
    image: "images/demo_img3.png",
  },
  {
    title: "FRONTEND-GEN-AGENT",
    image: "images/demo_img11.png",
  },
  {
    title: "ORION",
    image: "images/demo_img10.png",
  },
  {
    title: "ORION",
    image: "images/demo_img8.png",
  },
  {
    title: "LEETX",
    image: "images/demo_img2.png",
  },
  {
    title: "NODEX",
    image: "images/demo_img4.png ",
  }
];

export default function MyCarousel() {
  return (
    <div className="relative w-full py-12">
      
      {/* LEFT FADE */}
      <div className="pointer-events-none absolute left-0 top-0 h-full md:w-50 w-6 z-10 
        bg-gradient-to-r from-white via-white/80 to-transparent" />

      {/* RIGHT FADE */}
      <div className="pointer-events-none absolute right-0 top-0 h-full md:w-50 w-6 z-10 
        bg-gradient-to-l from-white via-white/80 to-transparent" />

      <Swiper
        modules={[Mousewheel]}
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={24}
        initialSlide={2}
        loop={true}
        mousewheel={{ forceToAxis: true }}
      >
        {cards.map((item, idx) => (
          <SwiperSlide
            key={idx}
            className="!w-[60vw] max-w-[700px] min-w-[400px]"
          >
            <>
              <div className="relative h-80 w-full rounded-2xl bg-zinc-200 flex items-center justify-center text-4xl font-bold overflow-hidden group">

                Card {item.title}
                <div className="absolute inset-0 flex items-center justify-center">

                  <img src={item.image} className="opacity-90" ></img>

                  {/* expanding circle */}
                  <div className="absolute transform translate-x-1/2 flex items-center justify-center 
                    w-10 h-10 rounded-full bg-[#2B2B2B] text-white
                    transition-all duration-400 ease-out
                    group-hover:w-18 group-hover:h-18
                    group-hover:scale-110
                  ">

                    {/* arrow */}
                    <svg
                      className="w-4 h-4 transition-transform duration-500 group-hover:rotate-45"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 17L17 7M17 7H8M17 7v9"
                      />
                    </svg>
                  
                  </div>
                </div>

              </div>

              <p className="text-[1.1rem] font-neo text-black mt-3 md:ml-2 ml-4">{item.title}</p>
            </>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}