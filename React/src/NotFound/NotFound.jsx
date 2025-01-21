import React from "react";
import { useLocation } from "react-router-dom";
export default function NotFound(){

    const location = useLocation()
    

    return(
        <div className="w-full min-h-screen bg-componentBg-mainBg flex flex-col justify-center items-center gap-y-8">
            <h3 className="text-[64px] text-red-700 font-bold ">Erorr : 404</h3>
            <div className="min-w-[700px] max-w-[200px] p-4 flex flex-row items-center justify-center rounded-[12px] bg-componentBg-mainBg2">
                <h3 className="text-[64px] text-btnColors-Mailblue font-bold ">Not found <span className="underline underline-offset-[10px] text-red-700">{location.pathname}</span></h3>
            </div>
            <p className="text-[48px] text-red-700 font-semibold underline underline-offset-[10px]">Address of Page isn't true</p>
        </div>
    )
}