import React from "react";

export default function FooterPage(){

    return(
        <div className="w-full flex flex-col justify-center items-center gap-y-8">
            <h3 className="text-[43px] text-textsColor-texts font-bold ">LOGO PLACE</h3>
            <p className="text-[43px] text-textsColor-texts font-light leading-[72px] text-center">
                Discover your Potential <br/>
                and become an FTMO Trader
            </p>
            <div className="flex flex-row justify-between items-center gap-x-8">
                <button className="w-[208px] flex justify-center items-center py-[16px] px-[30px] bg-btnColors-Mailblue rounded-lg text-textsColor-texts text-nameSize font-bold outline-none border-[2px] border-solid border-btnColors-Mailblue hover:bg-componentBg-primeryBg hover:text-btnColors-Mailblue transition-all duration-500 delay-100">
                    FTMO CHALLENGE
                </button>
                <button className="w-[208px] flex justify-center items-center py-[16px] px-[30px] bg-componentBg-primeryBg rounded-lg text-btnColors-Mailblue text-nameSize font-bold border-[2px] border-solid border-btnColors-Mailblue hover:bg-btnColors-Mailblue hover:text-textsColor-texts transition-all duration-500 delay-100">
                    FREE TRIAL
                </button>
            </div>
        </div>
    )
}