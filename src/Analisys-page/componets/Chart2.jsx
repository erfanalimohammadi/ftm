import React from "react";

export default function LineChart({ firstValue , secondValue , thirdValue}){

    return (
        <div className="flex flex-col justify-between items-start w-full gap-y-4">
            <div className=" flex flex-row justify-start items-center gap-x-2">
                <h3 className="text-textsColor-texts text-nameSize font-bold underline underline-offset-[1px]">
                    Consistency Score
                </h3>
                
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.99967 14.6663C11.6663 14.6663 14.6663 11.6663 14.6663 7.99967C14.6663 4.33301 11.6663 1.33301 7.99967 1.33301C4.33301 1.33301 1.33301 4.33301 1.33301 7.99967C1.33301 11.6663 4.33301 14.6663 7.99967 14.6663Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.99805 11.333L7.99805 7.99967" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.00195 6L7.99597 6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className="w-full bg-componentBg-mainBg rounded-[12px] h-[103px] flex flex-col justify-end items-center p-4 relative">
                <div className="relative w-full flex flex-row justify-center items-center ">
                    <div className="flex flex-row justify-center items-center h-[30px] bg-btnColors-Mailblue w-[0.30%] left-[2px] rounded-l-[4px] relative">
                        <div className="absolute left-[-21px] top-[-33px]">
                            <span className="text-textsColor-texts text-nameSize font-medium absolute right-[10px]" >0 %</span>
                            <svg width="50" height="34" viewBox="0 0 50 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.08163 0C1.82757 0 0 1.79102 0 4V22C0 24.209 1.82757 26 4.08163 26H17.7729L25 34L32.2271 26H45.9184C48.1724 26 50 24.209 50 22V4C50 1.79102 48.1724 0 45.9184 0H4.08163Z" fill="#1481FE"/>
                            </svg>
                        </div>

                    </div>

                    {firstValue > 0 && (
                        <div
                        className="flex flex-row justify-center items-center h-[30px] bg-[#912F38] rounded-l-[4px]"
                        style={{ width: `${firstValue}%` }}
                        >
                        <span className="text-textsColor-texts text-nameSize font-medium">0 - {firstValue} %</span>
                        </div>
                    )}

                    {secondValue > firstValue && (
                        <div
                        className="flex flex-row justify-center items-center h-[30px] bg-[#926121]"
                        style={{ width: `${secondValue - firstValue}%` }}
                        >
                        <span className="text-textsColor-texts text-nameSize font-medium">{firstValue} - {secondValue} %</span>
                        </div>
                    )}

                    {thirdValue > secondValue && (
                        <div
                        className="flex flex-row justify-center items-center h-[30px] bg-[#1B776E] rounded-r-[4px]"
                        style={{ width: `${thirdValue - secondValue}%` }}
                        >
                        <span className="text-textsColor-texts text-nameSize font-medium">{secondValue} - 100 %</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
      );
}