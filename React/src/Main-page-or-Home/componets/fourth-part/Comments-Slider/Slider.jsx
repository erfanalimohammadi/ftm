import React, { useState, useEffect } from "react";

export default function Slider() {

  return (
    <div className="w-[100%] flex flex-row justify-center items-center">

        <div className="w-[1376px] flex flex-row justify-between items-center absolute right-auto left-auto translate-y-[0px]">
                <button
                    className='border-none outline-none cursor-pointer'>
                        <svg className='cursor-pointer' width="21" height="42" viewBox="0 0 21 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.9983 39.4795L3.785 24.2662C1.98833 22.4695 1.98833 19.5295 3.785 17.7329L18.9983 2.51953" stroke="#1481FE" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
    
                <button
                    className='border-none outline-none cursor-pointer'>
                        <svg className='cursor-pointer rotate-180' width="21" height="42" viewBox="0 0 21 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.9983 39.4795L3.785 24.2662C1.98833 22.4695 1.98833 19.5295 3.785 17.7329L18.9983 2.51953" stroke="#1481FE" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                </button>
        </div>

        <div className="scroll-container overflow-y-hidden">
            <div className="scroll-item h-full inline-flex flex-col justify-center items-center">
                <div className="w-full h-[40%] bg-btnColors-Mailblue rounded-xl"></div>
                <div className="w-full h-[60%] bg-btnColors-Mailblue rounded-xl"></div>
            </div>
            <div className="scroll-item h-full inline-flex flex-col justify-center items-center">
                <div className="w-full h-[65%] bg-btnColors-Mailblue rounded-xl"></div>
                <div className="w-full h-[35%] bg-btnColors-Mailblue rounded-xl"></div>
            </div>
            <div className="scroll-item h-full inline-flex flex-col justify-center items-center">
                <div className="w-full h-[25%] bg-btnColors-Mailblue rounded-xl"></div>
                <div className="w-full h-[75%] bg-btnColors-Mailblue rounded-xl"></div>
            </div>
            <div className="scroll-item h-full inline-flex flex-col justify-center items-center">
                <div className="w-full h-[70%] bg-btnColors-Mailblue rounded-xl"></div>
                <div className="w-full h-[30%] bg-btnColors-Mailblue rounded-xl"></div>
            </div>
            <div className="w-[296px] h-full inline-flex flex-col justify-center items-center">
                <div className="w-full h-[40%] bg-btnColors-Mailblue rounded-xl"></div>
                <div className="w-full h-[60%] bg-btnColors-Mailblue rounded-xl"></div>
            </div>
            <div className="w-[296px] h-full inline-flex flex-col justify-center items-center">
                <div className="w-full h-[60%] bg-btnColors-Mailblue rounded-xl"></div>
                <div className="w-full h-[40%] bg-btnColors-Mailblue rounded-xl"></div>
            </div>
            <div className="scroll-item h-full inline-flex flex-col justify-center items-center">
                <div className="w-full h-[45%] bg-btnColors-Mailblue rounded-xl"></div>
                <div className="w-full h-[55%] bg-btnColors-Mailblue rounded-xl"></div>
            </div>
        </div>
    </div>
  );
}


