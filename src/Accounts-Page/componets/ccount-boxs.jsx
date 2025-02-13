import React from "react";
import { Link } from "react-router-dom";

export default function Boxs(){

    const boxs = [
        { id: 1 , name: 'Free tiral' ,  firstDSVG : 'M29.8346 16.5003C29.8346 23.8603 23.8613 29.8337 16.5013 29.8337C9.1413 29.8337 3.16797 23.8603 3.16797 16.5003C3.16797 9.14033 9.1413 3.16699 16.5013 3.16699C23.8613 3.16699 29.8346 9.14033 29.8346 16.5003Z' , secondDSVG : "M21.4478 20.7403L17.3145 18.2737C16.5945 17.847 16.0078 16.8203 16.0078 15.9803V10.5137" , firstText : 'Master your skills' , secondText : 'Practice your trading without risking anything' , options : [ 'No eligibility for an FTMO Acount' , '14 days' , 'Basic Account Analysis' , 'Basic Account Analysis'] , buttonName : 'TRY FOR FREE' , navigate : 'freeshopping'} ,

        { id: 2 , name: 'FTMO Challenge' ,  firstDSVG : 'M21.8346 10.1445H22.6256L29.8342 19.4199H14.7617' , secondDSVG : "M15.0402 26.3771L9.49272 16.0034M9.49272 16.0034L4.5 6.66699H16.6212L21.8913 16.0034H9.49272Z" , firstText : 'Trade up to $200,000 FTMO Account' , secondText : 'Show us your trading skills. Pass the Evaluation Course and receive the FTMO Account!' , options : [ 'We provide you with up to $200,000 FTMO Account' , 'Prove your trading skills' , 'Full Account Analysis' , 'Premium Apps'] , buttonName : 'Start FTMO Challenge' , navigate : 'shopping'} 
    ]

    return(
        <div className=" w-full flex flex-row justify-between items-stretch ">
            {boxs.map((items)=> (
                <div className={` ${items.id % 2 === 0 ? "border-btnColors-Mailblue border-[1px] border-solid" : "border-none"} flex flex-col justify-center items-center py-8 px-6 rounded-[12px] relative overflow-hidden w-[48%] bg-componentBg-mainBg`}>

                    <div className="w-[180px] h-[150px] rounded-full absolute top-[-75px] left-[-75px] bg-btnColors-Mailblue blur-[180px]"></div>
                    <div className="w-[180px] h-[150px] rounded-full absolute bottom-[-75px] right-[-75px] bg-btnColors-Mailblue blur-[180px]"></div>

                    <div className="w-full flex flex-col justify-center items-center gap-y-[41px] ">

                        <div className="w-full flex flex-col justify-center items-center gap-y-1">

                            <div className="p-2 flex justify-center items-center border-[1px] rounded-[6px] border-[#7e7e7e] border-silid">
                                
                                <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d={items.firstDSVG} stroke="#1481FE" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d={items.secondDSVG} stroke="#1481FE" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                            </div>
                            <h3 className="text-textsColor-texts text-logoSize font-medium  text-center"> {items.name} </h3>
                            <p className="text-[14px] text-btnColors-Mailblue font-light text-center "> {items.firstText} </p>
                            <p className="text-[14px] text-textsColor-texts font-light text-center "> {items.secondText} </p>

                        </div>

                        <div className="w-full flex flex-col justify-center items-center gap-y-6">
                            {items.options.map((item)=> (
                                <span className="w-full flex flex-row justify-start items-center gap-x-2">
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 0.5C4.49 0.5 0 4.99 0 10.5C0 16.01 4.49 20.5 10 20.5C15.51 20.5 20 16.01 20 10.5C20 4.99 15.51 0.5 10 0.5ZM14.78 8.2L9.11 13.87C8.97 14.01 8.78 14.09 8.58 14.09C8.38 14.09 8.19 14.01 8.05 13.87L5.22 11.04C4.93 10.75 4.93 10.27 5.22 9.98C5.51 9.69 5.99 9.69 6.28 9.98L8.58 12.28L13.72 7.14C14.01 6.85 14.49 6.85 14.78 7.14C15.07 7.43 15.07 7.9 14.78 8.2Z" fill="#1481FE"/>
                                    </svg>
                                    <p className="text-textsColor-texts text-nameSize font-medium "> {item} </p>
                                </span>
                            ))}
                        </div>

                        <div className="w-full">
                            <Link to={`/trader/accountoverview/${items.navigate}`} className={` ${items.id % 2 === 0 ? "text-textsColor-texts bg-btnColors-Mailblue border-none" : "text-btnColors-Mailblue bg-componentBg-mainBg  border-[1.5px] border-btnColors-Mailblue border-solid" } w-full flex flex-row justify-center items-center py-3 font-bold rounded-[8px]`}>{items.buttonName}</Link>
                        </div>

                    </div>

                </div>
            ))}
        </div>
    )
}