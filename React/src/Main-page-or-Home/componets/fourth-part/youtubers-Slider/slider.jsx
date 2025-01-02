import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Pagination , Navigation, Autoplay } from "swiper/modules";

import Person from '../../../../Icons/jpgIcons/person1.png'
import Frame from '../../../../Icons/jpgIcons/countreis/Frame6.jpg'
//این صفحه به زودی تکمیل خواهد شد...

export default function YoutubeSlider() {
  const slides = [
    {
      name: "Elina Nami",
      country: "Australia",
      image: "https://via.placeholder.com/150", // تصویر
      flag: "https://via.placeholder.com/24", // پرچم کشور
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      youtube: "Watch On Youtube",
    },
    {
      name: "Jack Wilson",
      country: "USA",
      image: "https://via.placeholder.com/150",
      flag: "https://via.placeholder.com/24",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      youtube: "Watch On Youtube",
    },
    {
      name: "Erfan Alimohammadi",
      country: "USA",
      image: "https://via.placeholder.com/150",
      flag: "https://via.placeholder.com/24",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      youtube: "Watch On Youtube",
    },
    {
      name: "Farhan Alimohammadi",
      country: "USA",
      image: "https://via.placeholder.com/150",
      flag: "https://via.placeholder.com/24",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      youtube: "Watch On Youtube",
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center relative">
      <Swiper
        slidesPerView='1.35' 
        centeredSlides={true} 
        spaceBetween={16}
        loop={true}
        navigation={{
            prevEl: ".custom-prev1",
            nextEl: ".custom-next1",
          }}
        autoplay={{
          delay: 10000, // حرکت خودکار هر 10 ثانیه
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Navigation, Autoplay , Pagination]}
        className="w-[85%]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="w-full flex flex-row justify-center items-center "
          >
        <div className="w-full flex flex-row justify-center items-center p-4 rounded-2xl bg-componentBg-buttonBg text-textsColor-texts gap-x-4">

            <div className="w-[40%] h-[326px] rounded-2xl relative overflow-hidden p-4 flex flex-col justify-between items-center ">

                <div className="absolute inset-0 bg-gradient-to-br from-[#cc1717] to-[#38045d] blur-3xl"></div>

                <div className="w-full flex flex-col z-[4] justify-center items-center p-4 gap-y-2 rounded-lg glass-effect5">

                    <div className="w-[54px] h-[32px] bg-[#FF0000] rounded-[6px] flex justify-center items-center">
                        
                        <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.4492 9.30456L0.274219 17.7389L0.274219 0.870225L14.4492 9.30456Z" fill="white"/>
                        </svg>

                    </div>

                    <p className="text-logoSize text-textsColor-texts font-medium ">Watch On Youtube</p>
                </div>
                <img className="z-[5] absolute bottom-[-10px] right-0  " src={Person} alt="" />

                <div className=" z-20 w-full flex flex-row justify-start items-center gap-x-2 ">
                    <img src={Frame} alt="" className="w-[62px] h-[32px] rounded-[4px] " />
                    <div className="">
                        <h3 className="text-textsColor-texts text-nameSize font-bold">{slide.name}</h3>
                        <p className="text-textsColor-texts text-[14px] font-light">From {slide.country}</p>
                    </div>
                </div>

                <div className="absolute z-[8] bottom-0 w-[326px] h-14 shadow-lg bg-[#14141443] blur-[5px]  "></div>
                <div className="absolute z-[8] bottom-[-5px] w-[326px] h-10 bg-gradient-to-t from-[#000] via-[#090909ca] to-[#14141443] blur-[6px] "></div>

            </div>

            <div className="w-[60%] h-full"></div>
        </div>
          </SwiperSlide>
        ))}
      </Swiper>
        <div className="w-[1376px] flex flex-row justify-between items-center z-20 absolute right-auto left-auto translate-y-[0px]">  
                        <button
                        className='custom-prev1 border-none outline-none cursor-pointer'>
                            <svg className='cursor-pointer' width="21" height="42" viewBox="0 0 21 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.9983 39.4795L3.785 24.2662C1.98833 22.4695 1.98833 19.5295 3.785 17.7329L18.9983 2.51953" stroke="#1481FE" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
        
                        <button
                        className=' custom-next1 border-none outline-none cursor-pointer'>
                            <svg className='cursor-pointer rotate-180' width="21" height="42" viewBox="0 0 21 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.9983 39.4795L3.785 24.2662C1.98833 22.4695 1.98833 19.5295 3.785 17.7329L18.9983 2.51953" stroke="#1481FE" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
        
        
        </div>
    </div>
  );
}
