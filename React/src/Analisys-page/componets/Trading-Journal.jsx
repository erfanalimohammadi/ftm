import React from "react";
//به زودی درست خواهد شد...
export default function TradingJournal(){

    return(
        <div className="w-full flex flex-col justify-center items-start gap-y-4">
            <h3 className="flex flex-row justify-start items-center gap-x-2 w-full text-textsColor-texts text-nameSize font-bold">
                        Trading Journal
                
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.99967 14.6663C11.6663 14.6663 14.6663 11.6663 14.6663 7.99967C14.6663 4.33301 11.6663 1.33301 7.99967 1.33301C4.33301 1.33301 1.33301 4.33301 1.33301 7.99967C1.33301 11.6663 4.33301 14.6663 7.99967 14.6663Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.99805 11.333L7.99805 7.99967" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.00195 6L7.99597 6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </h3>

            <div className="w-full rounded-[12px] h-[336px] bg-componentBg-mainBg"></div>
        </div>
    )
}