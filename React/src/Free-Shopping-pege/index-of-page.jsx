import React from 'react';
import FirstHeader from '../staticElems/header-1';
import Sidebar from '../staticElems/sidebar';
import RouterElement from '../staticElems/routerElem';
import Clock from '../Icons/clock.svg'

export default function FreeShoppingPage(){
    return(
        <div className='flex flex-col min-h-screen justify-start bg-componentBg-primeryBg w-full h-full box-border'>
            <FirstHeader/>
            <div className='flex flex-row w-full min-h-screen'>
                <Sidebar/>

                <div className="flex flex-col justify-start items-start mt-topSpace w-[66%] absolute left-[360px] gap-y-[72px]">
                    <RouterElement/>
                    <div className='w-full p-4 flex flex-col justify-between items-start gap-y-[16px] bg-componentBg-mainBg
                    rounded-xl'>
                        <h3 className='flex flex-row gap-x-[8px] text-textsColor-texts font-medium text-nameSize '>
                            <object 
                                data={Clock}
                                type="image/svg+xml" 
                                className="w-[24px] h-[24px] text-textsColor-texts"
                            />
                            Free Trial
                        </h3>
                        <p className='text-justify text-nameSize text-textsColor-texts '>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>


                    <div className=" flex flex-col gap-y-[10px]">
                        <h3 className='text-textsColor-texts text-nameSizev font-medium'>Free Trial Registration</h3>
                        <div className='w-full p-4 flex flex-col justify-start items-start bg-componentBg-mainBg
                    rounded-xl gap-y-[32px]'>
                            <h3 className='text-textsColor-texts text-nameSizev font-medium'>Account Balance</h3>
                            <div className="flex flex-row justify-between items-center flex-wrap gap-y-[16px] mt-[10px]">
                                <button className='text-textsColor-texts text-nameSize font-medium rounded-lg py-[12px] px-[16px]
                                 bg-componentBg-buttonBg flex justify-center items-center w-[232px]'>200 000 USD</button>
                                <button className='text-textsColor-texts text-nameSize font-medium rounded-lg py-[12px] px-[16px]
                                 bg-componentBg-buttonBg flex justify-center items-center w-[232px]'>100 000 USD</button>
                                <button className='text-textsColor-texts text-nameSize font-medium rounded-lg py-[12px] px-[16px]
                                 bg-componentBg-buttonBg flex justify-center items-center w-[232px]'>50 000 USD</button>
                                <button className='text-textsColor-texts text-nameSize font-medium rounded-lg py-[12px] px-[16px]
                                 bg-componentBg-buttonBg flex justify-center items-center w-[232px]'>25 000 USD</button>
                                <button className='text-textsColor-texts text-nameSize font-medium rounded-lg py-[12px] px-[16px]
                                 bg-componentBg-buttonBg flex justify-center items-center w-[232px]'>10 000 USD</button>
                            </div>

                            <div className="">
                            <h3 className='text-textsColor-texts text-nameSizev font-medium'>Account Typr (Leverage 1:100)</h3>
                            </div>
                            <div className=""></div>
                            <div className=""></div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}