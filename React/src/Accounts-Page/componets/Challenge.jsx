import React from "react";
import { Link } from "react-router-dom";

export default function Challenge(){

    return(
        <div className="w-full flex flex-col justify-center items-center bg-componentBg-mainBg rounded-[12px] p-4 gap-y-8">
            <div className="w-full flex flex-row justify-start items-center ">
                <h3 className="text-textsColor-texts text-logoSize font-medium ">FTMO Challenge</h3>
            </div>
            <div className="w-full flex flex-row justify-start items-center ">
                <h3 className="text-textsColor-texts text-logoSize font-light ">Your FTMO Challenge is getting ready.</h3>
            </div>
            <div className="w-full flex flex-row justify-end items-center ">
                <Link to={"/trader/accountoverview/shopping"} className="text-nameSize text-textsColor-texts font-bold bg-btnColors-Mailblue rounded-[8px] px-8 py-3 ">Billing</Link>
            </div>
        </div>
    )
}