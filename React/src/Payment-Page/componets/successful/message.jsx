import React from "react";

export default function Received(){

    return (
        <div className="w-full flex flex-col justify-center items-center gap-y-4">
            
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 0C13.47 0 0 13.47 0 30C0 46.53 13.47 60 30 60C46.53 60 60 46.53 60 30C60 13.47 46.53 0 30 0ZM44.34 23.1L27.33 40.11C26.91 40.53 26.34 40.77 25.74 40.77C25.14 40.77 24.57 40.53 24.15 40.11L15.66 31.62C14.79 30.75 14.79 29.31 15.66 28.44C16.53 27.57 17.97 27.57 18.84 28.44L25.74 35.34L41.16 19.92C42.03 19.05 43.47 19.05 44.34 19.92C45.21 20.79 45.21 22.2 44.34 23.1Z" fill="#1EC7B4"/>
            </svg>

            <h4 className="text-[#1EC7B4] text-[32px] font-medium" >The order has been received</h4>

            <p className=" text-[14px] text-textsColor-texts font-light text-center">We will start processing your FTMO Challenege as soon as we receive the payment. Ypur login crendentials will be emailed to you within <br />
            24 hours of receiving the payment.</p>
        </div>
    )
}