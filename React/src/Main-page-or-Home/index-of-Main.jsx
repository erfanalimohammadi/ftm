import React from 'react';
import Header2 from '../staticElems/main-header/header-2';
import MainVector from '../Icons/Vector-for-main-page.svg'
export default function Homepage(){

    return(
        <div className='flex flex-col min-h-screen bg-componentBg-primeryBg justify-start w-full'>
            {/* header */}
            <Header2/>

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
            <div className="mt-1 flex flex-col gap-y-3">
                
                <div className=""> 
                        <svg className='z-10' width="1440" height="204" viewBox="0 0 1440 204" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 132.862L122.34 37.8816L200.557 160.301L266.235 6.5L481.5 167L592 70L705.961 202.515L836.323 2L900.501 132.862L1054.93 25.2175L1189.3 179.297L1307.63 25.2175L1440 132.862" stroke="url(#paint0_linear_97_1497)"/>
                            <defs>
                                <linearGradient id="paint0_linear_97_1497" x1="0" y1="109.645" x2="1440" y2="109.645" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#1481FE"/>
                                <stop offset="0.2" stop-color="#1276E9" stop-opacity="0"/>
                                <stop offset="0.4" stop-color="#116AD2"/>
                                <stop offset="0.6" stop-color="#0F63C2" stop-opacity="0"/>
                                <stop offset="0.8" stop-color="#0E5CB6"/>
                                <stop offset="1" stop-color="#0C4D98" stop-opacity="0"/>
                                </linearGradient>
                            </defs>
                        </svg>
                        
                        <svg className=' translate-y-[-201.5px]' width="1440" height="204" viewBox="0 0 1440 204" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M122.34 35.8816L0 130.862V410H1440V130.862L1307.63 23.2175L1189.3 177.297L1054.93 23.2175L900.501 130.862L836.323 0L705.961 200.515L592 68L481.5 165L264.735 0L200.557 158.301L122.34 35.8816Z" fill="url(#paint0_linear_97_1495)"/>
                            <defs>
                                <linearGradient id="paint0_linear_97_1495" x1="720" y1="0" x2="720" y2="350" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#1481FE" stop-opacity="0.1"/>
                                <stop offset="0.25" stop-color="#1481FE" stop-opacity="0.04"/>
                                <stop offset="0.5" stop-color="#1481FE" stop-opacity="0"/>
                                <stop offset="0.75" stop-color="#1481FE" stop-opacity="0"/>
                                <stop offset="1" stop-color="#1481FE" stop-opacity="0"/>
                                </linearGradient>
                            </defs>
                        </svg>
                </div>

                <div className="">

                </div>
            </div>

        </div>
    )
}