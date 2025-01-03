import React from "react";

export default function Trial(){

    const content = [
        {id: "1" ,name : 'Ended' , icon : false , isLink : false /* link : 'none' */},
        {id: "2" ,name : '8 Nov 2024' , icon : true , firstdD : 'M14.6663 7.99967C14.6663 11.6797 11.6797 14.6663 7.99967 14.6663C4.31967 14.6663 1.33301 11.6797 1.33301 7.99967C1.33301 4.31967 4.31967 1.33301 7.99967 1.33301C11.6797 1.33301 14.6663 4.31967 14.6663 7.99967Z' , secondD : 'M10.4729 10.1202L8.40626 8.88684C8.04626 8.6735 7.75293 8.16017 7.75293 7.74017V5.00684' , isLink : false /* link : 'none' */},
        {id: "3" ,name : '22 Nov 2024' , icon : true , firstdD : 'M14.6663 7.99967C14.6663 11.6797 11.6797 14.6663 7.99967 14.6663C4.31967 14.6663 1.33301 11.6797 1.33301 7.99967C1.33301 4.31967 4.31967 1.33301 7.99967 1.33301C11.6797 1.33301 14.6663 4.31967 14.6663 7.99967Z' , secondD : 'M10.4729 10.1202L8.40626 8.88684C8.04626 8.6735 7.75293 8.16017 7.75293 7.74017V5.00684' , isLink : false /* link : 'none' */},
        {id: "4" ,name : '$ 50,000,000' , icon : false , isLink : false /* link : 'none' */},
        {id: "5" ,name : 'FTMO' , icon : false , isLink : false /* link : 'none' */},
        {id: "6" ,name : 'Download' , icon : false , isLink : true /* link : 'none' */},
        {id: "7" ,name : '22 Nov 2024 00:47:01' , icon : true , firstdD : 'M14.6663 7.99967C14.6663 11.6797 11.6797 14.6663 7.99967 14.6663C4.31967 14.6663 1.33301 11.6797 1.33301 7.99967C1.33301 4.31967 4.31967 1.33301 7.99967 1.33301C11.6797 1.33301 14.6663 4.31967 14.6663 7.99967Z' , secondD : 'M10.4729 10.1202L8.40626 8.88684C8.04626 8.6735 7.75293 8.16017 7.75293 7.74017V5.00684' , isLink : false /* link : 'none' */}
    ]

    return(
        <div className="w-[28%] h-[200px] flex flex-col justify-start items-start gap-y-4">
            <h3 className="text-nameSize text-textsColor-texts font-bold">Free Trial 1420061385</h3>

            <div className="w-full flex flex-row justify-center items-center">
                <div className="flex flex-col justify-center items-stretch w-[40%]">
                    <span className="p-4 bg-componentBg-mainBg text-white text-[12px] font-bold flex flex-row justify-start items-center rounded-tl-xl border-b-[0.25px] border-[#C4C4C4] border-solid">Status</span>
                    <span className="p-4 bg-componentBg-mainBg text-white text-[12px] font-bold flex flex-row justify-start items-center  border-b-[0.25px] border-[#C4C4C4] border-solid">Start</span>
                    <span className="p-4 bg-componentBg-mainBg text-white text-[12px] font-bold flex flex-row justify-start items-center  border-b-[0.25px] border-[#C4C4C4] border-solid">End</span>
                    <span className="p-4 bg-componentBg-mainBg text-white text-[12px] font-bold flex flex-row justify-start items-center  border-b-[0.25px] border-[#C4C4C4] border-solid">Account Size</span>
                    <span className="p-4 bg-componentBg-mainBg text-white text-[12px] font-bold flex flex-row justify-start items-center  border-b-[0.25px] border-[#C4C4C4] border-solid">Account Type</span>
                    <span className="p-4 bg-componentBg-mainBg text-white text-[12px] font-bold flex flex-row justify-start items-center  border-b-[0.25px] border-[#C4C4C4] border-solid">Platform (MT4)</span>
                    <span className="p-4 bg-componentBg-mainBg text-white text-[12px] font-bold flex flex-row justify-start items-center rounded-bl-xl ">Last Updated</span>
                </div>
                <div className="w-[60%] flex flex-col justify-center items-stretch">

                    {content.map((item)=> (
                        item.icon === false ? (

                            <span className={` ${item.id === '1' ? "rounded-tr-xl border-b-[0.25px] border-[#C4C4C4] border-solid" : item.id === '7' ? "rounded-br-xl border-none" : "rounded-none border-b-[0.25px] border-[#C4C4C4] border-solid"} p-4 flex flex-row justify-end items-center text-textsColor-texts text-[12px] font-bold bg-componentBg-mainBg2  gap-x-2 ${item.isLink ? "cursor-pointer underline underline-offset-[2px]" : ""}`}>{item.name}</span>

                        ) : item.icon === true ? (

                            <span className={`${item.id === '1' ? "rounded-tr-xl border-b-[0.25px] border-[#C4C4C4] border-solid" : item.id === '7' ? "rounded-br-xl border-none" : "rounded-none border-b-[0.25px] border-[#C4C4C4] border-solid"} p-4 flex flex-row justify-end items-center text-textsColor-texts text-[12px] font-bold bg-componentBg-mainBg2 border-b-[0.25px] border-[#C4C4C4] border-solid gap-x-2 ${item.isLink ? "cursor-pointer" : ""}`}>
                                {item.name} 
                                
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d={item.firstdD} stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d={item.secondD} stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>

                        ) : null
                    ))}
                </div>
            </div>

        </div>
    )
}