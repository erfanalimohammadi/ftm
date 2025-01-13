import React from "react";

export default function Box({ number , size , type , platform , national , paid}){

    const content = [ 
        { id : '1' , name: 'Order number' , data : number},
        { id : '2' , name: 'Account Size' , data : size},
        { id : '3' , name: 'Account Type' , data : type},
        { id : '4' , name: 'Platform' , data : platform},
        { id : '5' , name: 'Trading Acocount Currency' , data : national}
    ]

    return(
        <div className="w-full flex flex-row justify-center items-center ">
            <div className="flex flex-col justify-center items-center drop-shadow-[0px_0px_3px_#000] rounded-[12px] w-[612px]">

                <div className=" w-full flex flex-row justify-center items-center">

                    <div className="w-[50%] flex flex-col items-center justify-center ">
                        {content.map((item)=> (
                            <span className={`w-full ${item.id === '1' ? "rounded-tl-[12px] border-b-[0.5px] border-solid border-[#747474] " : item.id === '5' ? "rounded-none border-none" : "rounded-none border-b-[0.5px] border-solid border-[#747474]"}
                            text-[16px] text-textsColor-texts font-medium flex flex-row justify-start items-center p-4 bg-componentBg-mainBg `} >{item.name}</span> 
                        ))}
                    </div>

                    <div className="w-[50%] flex flex-col items-center justify-center ">
                        {content.map((item)=> (
                                <span className={`w-full ${item.id === '1' ? "rounded-tr-[12px] border-b-[0.5px] border-solid border-[#747474] " : item.id === '5' ? "rounded-none border-none" : "rounded-none border-b-[0.5px] border-solid border-[#747474]"}
                                text-[16px] font-medium flex flex-row justify-end items-center p-4 bg-componentBg-mainBg2 
                                ${item.name === 'Account Size' ? "text-[#1EC7B4]" : item.name === 'Trading Acocount Currency' ? "text-[#1EC7B4]" : "text-textsColor-texts"}`} >{item.data}</span> 
                            ))}
                    </div>

                </div>
                <span className="w-full flex flex-row justify-between items-center p-4 bg-btnColors-Mailblue text-[16px] text-textsColor-texts font-medium rounded-b-[12px] ">
                    <p>To be paid</p>
                    <p>{paid}</p>
                </span>
            </div>
        </div>
    )
}