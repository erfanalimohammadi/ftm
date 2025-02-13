import React, { useState, useEffect } from "react";
import Slider from "./slider-items";

export default function FindOutSlider(){

        const slides = [
            { id : '1' , /* img : '../imgFolder/img' */ title : 'TRADING' /* linkOfButton: 'Route' */},
            { id : '2' , /* img : '../imgFolder/img' */ title : 'FTMO BLOG' /* linkOfButton: 'Route' */},
            { id : '3' , /* img : '../imgFolder/img' */ title : 'FREE TRIAL' /* linkOfButton: 'Route' */},
            { id : '5' , /* img : '../imgFolder/img' */ title : 'FTMO DISCORD' /* linkOfButton: 'Route' */},
            { id : '6' , /* img : '../imgFolder/img' */ title : 'Tools & Services' /* linkOfButton: 'Route' */},
            { id : '7' , /* img : '../imgFolder/img' */ title : 'Test Item' /* linkOfButton: 'Route' */}
          ];
        //این قسمت مربوط به اطلاعات از سمت سرور میشه و اینکه شاید این اطلاعات تستی به درستی کار نکنن ولی قالب اصلی درست شده برای این قسمت 
    
    
          const [index, setIndex] = useState(0);
          const totalSlides = slides.length;
          const nextSlide = () => {
            setIndex((prevIndex) => (prevIndex + 1) % totalSlides);
          };
          const prevSlide = () => {
            setIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
          };
          const getVisibleSlides = () => {
            let visibleSlides = [];
            for (let i = 0; i < 5; i++) {
              visibleSlides.push(slides[(index + i) % totalSlides]);
            }
            return visibleSlides;
          };
          useEffect(() => {
            const interval = setInterval(nextSlide , 5000);
            return () => clearInterval(interval);
          }, []);
        return (
            <div className="flex flex-col justify-center items-center w-full gap-y-8"   >

              <div className="w-[85%]  flex flex-row justify-start items-start ">
                <h3 className="text-textsColor-texts text-[32px] font-medium ">
                Find out how <br />
                you can benefit with FTMO
                </h3>
              </div>
    
                <div className="w-[1376px] flex flex-row justify-between items-center absolute right-auto left-auto translate-y-[0px]">  
                    <button
                    onClick={prevSlide}
                    className='border-none outline-none cursor-pointer'>
                        <svg className='cursor-pointer' width="21" height="42" viewBox="0 0 21 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.9983 39.4795L3.785 24.2662C1.98833 22.4695 1.98833 19.5295 3.785 17.7329L18.9983 2.51953" stroke="#1481FE" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
    
                <button
                onClick={nextSlide}
                    className='border-none outline-none cursor-pointer'>
                        <svg className='cursor-pointer rotate-180' width="21" height="42" viewBox="0 0 21 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.9983 39.4795L3.785 24.2662C1.98833 22.4695 1.98833 19.5295 3.785 17.7329L18.9983 2.51953" stroke="#1481FE" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
    
    
                </div>
    
                <div className="flex flex-row justify-center items-center  gap-x-4 w-[85%] overflow-x-hidden flex-nowrap flex-">
                    {getVisibleSlides().map((slides) => (
                        <Slider title={slides.title}/>
                    ))}
                </div>
    
    
            </div>
        )
       
};



