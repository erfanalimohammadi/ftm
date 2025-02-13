import React from "react";

export default function Account({param}){

    return(
        <div className=" flex flex-row justify-start items-center w-full bg-componentBg-mainBg rounded-xl py-4 px-6 gap-x-[8px]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 4V20H22" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M4 17L8 12.5L11 14.5L18 6L21.5 9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <h4 className="text-logoSize text-textsColor-texts font-medium">
                Account Metrix {param}
                {/* به زودی با بکند ادقام خواهد شد و این بخش هم با بکند تغییر خاوهد کرد! */}
            </h4>
        </div>
    )
}