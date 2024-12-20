import React from "react";

export default function BalanceButton({price , discount}){
    return(
        <div className="relative inline-block">
            <button className="group bg-componentBg-buttonBg border-none outline-none active:border-[2px] active:border-btnColors-Mailblue active:border-solid px-4 py-3 w-[144px] text-textsColor-texts text-nameSize font-bold rounded-lg">
                ${price}
            </button>
            <div className=' cursor-pointer' >
                <div className="w-[71px] h-[18.01px] absolute rotate-[35deg] top-[3px] -right-4 flex justify-center items-center ">
                    
                    <svg className="absolute rotate-[-29deg]" width="71" height="52" viewBox="0 0 71 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M70.4878 35.501L34.3637 14.6447L9 0.000976562L8.84688 10.9162L0 15.5894L61.4878 51.0894L61.1115 41.0912L70.4878 35.501Z" fill="#1481FE"/>
                    </svg>

                    <p className="z-10 text-textsColor-texts text-[13px] font-light"> {discount === "0" ? "%" : `${discount}% SALE` } </p>
                </div>
            </div> 
        </div>

    )
}