import React from "react";

export default function FirstPart(){
    return(
        <div className="flex flex-col justify-center items-center gap-y-14 mx-auto mt-[156px]">
            <div className="flex max-w-[958px] flex-col justify-between items-center gap-y-[32px]">
                <div className="w-full flex flex-row justify-center items-center">
                    <p className='text-btnColors-Mailblue text-[48px] font-bold text-center'>Since 2025</p>
                </div>

                <div className=""><h3 className='text-textsColor-texts text-[96px] text-center leading-[104.66px]'>
                    Monetize <br /> your demo TRADING
                </h3></div>

                <div className=" flex flex-row justify-center items-center">
                    <p className='text-textsColor-texts text-nameSize text-center px-6 leading-[17.44px] '>
                        Master your trading skills on our simulated trading platform, improve your trading on A demo FTMO account WITH up to $200,000 and get A reward OF up to 90% of your simulated profits
                    </p>
                </div>
                <div className="absolute w-[400px] h-[400px] rounded-full bg-btnColors-Mailblue/15 blur-[150px]"></div>
            </div>

            <div className="flex flex-row justify-between items-center gap-x-8">
                <button className="w-[208px] flex justify-center items-center py-[16px] px-[32px] bg-btnColors-Mailblue rounded-lg text-textsColor-texts text-nameSize font-bold outline-none border-[2px] border-solid border-btnColors-Mailblue hover:bg-componentBg-primeryBg hover:text-btnColors-Mailblue transition-all duration-500 delay-100">
                    FTMO CHALLENGE
                </button>
                <button className="w-[208px] flex justify-center items-center py-[16px] px-[32px] bg-componentBg-primeryBg rounded-lg text-btnColors-Mailblue text-nameSize font-bold border-[2px] border-solid border-btnColors-Mailblue hover:bg-btnColors-Mailblue hover:text-textsColor-texts transition-all duration-500 delay-100">
                    FREE TRIAL
                </button>
            </div>
        </div>
    )
}