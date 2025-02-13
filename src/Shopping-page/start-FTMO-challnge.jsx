import React from "react";
import Balance from "../Free-Shopping-pege/free-Trial-Registration/Account-Balance";
import Typer from "../Free-Shopping-pege/free-Trial-Registration/Account-Typer";
import Platform from "../Free-Shopping-pege/free-Trial-Registration/platform";
import Checkboxs from "../Free-Shopping-pege/free-Trial-Registration/checkboxs";
import InfoBox from "./Components/infoBox";
import { Link } from "react-router-dom";
export default function StartChallange(){
    return(
        <div className='flex flex-col gap-y-[10px]'>

            <div className="w-full flex flex-col justify-start items-start bg-componentBg-mainBg rounded-xl gap-y-[32px]">
                <Balance/>
                <Typer/>
                <Platform/>
                <InfoBox/>
                <Checkboxs/>
                {/* BUTTON */}
                <div className="flex flex-row justify-center items-center w-full">
                    <Link to={'payment'} className='bg-btnColors-Mailblue py-[12px] px-[16px] rounded-lg'>
                        <h3 className='text-textsColor-texts text-nameSize font-bold'>Start Free Trial</h3>
                    </Link>
                </div>
            </div>
        </div>
    )
}