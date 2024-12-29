import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper and Tailwind CSS styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
  const [direction, setDirection] = useState("horizontal");

  useEffect(() => {
    const updateDirection = () => {
      const newDirection = window.innerWidth <= 760 ? "vertical" : "horizontal";
      setDirection(newDirection);
    };

    updateDirection();
    window.addEventListener("resize", updateDirection);

    return () => {
      window.removeEventListener("resize", updateDirection);
    };
  }, []);

  return (
    <div className="w-full h-screen bg-gray-200 flex items-center justify-center">
      <Swiper
        modules={[Navigation]}
        slidesPerView={3}
        direction={direction}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="swiper-container"
      >
        {[...Array(10)].map((_, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center text-center text-lg bg-white rounded-lg shadow-md p-4">
              Resize me!
            </div>
          </SwiperSlide>
        ))}
        <div
          className="swiper-button-next text-black w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center absolute right-2 z-10 hover:bg-gray-400"
          role="button"
        >
          &gt;
        </div>
        <div
          className="swiper-button-prev text-black w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center absolute left-2 z-10 hover:bg-gray-400"
          role="button"
        >
          &lt;
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;



