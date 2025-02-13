import React from 'react';
import Balance from './Account-Balance';
import Typer from './Account-Typer';
import Platform from './platform';
import Checkboxs from './checkboxs';

export default function TrialRegistration(){
    return(
        <div className='flex flex-col gap-y-[10px]'>
            <h3 className="text-textsColor-texts text-nameSizev font-medium">Free Trial Registration</h3>

            <div className="w-full p-4 flex flex-col justify-start items-start bg-componentBg-mainBg rounded-xl gap-y-[32px]">
                <Balance/>
                <Typer/>
                <Platform/>
                <Checkboxs/>
                {/* BUTTON */}
                <div className="flex flex-row justify-center items-center w-full">
                    <button className='bg-btnColors-Mailblue py-[12px] px-[16px] rounded-lg'>
                        <h3 className='text-textsColor-texts text-nameSize font-bold'>Start Free Trial</h3>
                    </button>
                </div>
            </div>
        </div>
    )
}