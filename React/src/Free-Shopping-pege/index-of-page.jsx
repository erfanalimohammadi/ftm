import React, { useState } from 'react';
import FirstHeader from '../staticElems/header-1';
import Sidebar from '../staticElems/sidebar';
import RouterElement from '../staticElems/routerElem';
import TrialRegistration from './free-Trial-Registration/index-free-trial';
import Clock from '../Icons/clock.svg'


export default function FreeShoppingPage(){
    return(
        <div className="flex flex-col min-h-screen bg-componentBg-primeryBg justify-start w-full box-border">
            <FirstHeader />

            <div className="flex flex-row w-full min-h-screen">
                {/* Sidebar */}
                <Sidebar />

                {/* Main Content */}
                <div className="flex flex-col justify-start items-start mt-topSpace w-[66%] ml-[360px] gap-y-[72px]">
                    {/* Router Element */}
                    <RouterElement />

                    {/* Free Trial Section */}
                    <div className="w-full p-4 flex flex-col justify-between items-start gap-y-[16px] bg-componentBg-mainBg rounded-xl">
                        <h3 className="flex flex-row gap-x-[8px] text-textsColor-texts font-medium text-nameSize">
                        <object
                            data={Clock}
                            type="image/svg+xml"
                            className="w-[24px] h-[24px] text-textsColor-texts"
                        />
                        Free Trial
                        </h3>
                        <p className="text-justify text-nameSize text-textsColor-texts">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>

                    {/* Free Trial Registration */}
                    <TrialRegistration/>

                    <div className="w-full p-4 flex flex-col justify-between items-start gap-y-[16px]">
                        <div className="flex flex-row justify-start items-center gap-x-[12px]">
                        <h3 className="flex flex-row gap-x-[8px] text-textsColor-texts font-bold text-[12px] underline">
                            Privacy policy
                        </h3>
                        <h3 className="flex flex-row gap-x-[8px] text-textsColor-texts font-bold text-[12px] underline">
                            Terms & Conditions
                        </h3>
                        </div>
                        <p className="text-justify text-nameSize text-textsColor-texts">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}