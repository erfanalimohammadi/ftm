import React from "react";

export default function Statistics(){

    const statistics = [
        {id : '1' , firstName : 'Equity' , secondName : 'Average Profit' , firstValue : '$49,980,30' , secondValue : '0.00' , color : 'green' , icon : false},
        {id : '2' , firstName : 'Balance' , secondName : 'Average Loss' , firstValue : '$49,980,30' , secondValue : '-$9.85' , color : 'red' , icon : false},
        {id : '3' , firstName : 'No. of trades' , secondName : 'Average Profit' , firstValue : '2' , secondValue : '0.00' , color : false , icon : true},
        {id : '4' , firstName : 'Lots' , secondName : 'Expectancy' , firstValue : '2.00' , secondValue : '-$9.85' , color : false , icon : true},
        {id : '5' , firstName : 'Win rate' , secondName : 'Profit factor' , firstValue : '0.00%' , secondValue : '0.00' , color : false , icon : true}
    ]

    return(
        <div className="w-[50%] flex flex-col justify-start items-center gap-y-4">
            <h3 className="text-textsColor-texts text-nameSize font-bold w-full flex flex-row justify-start">Statistics</h3>
            <div className="w-full flex flex-col justify-center items-center ">

                <div className="w-full flex flex-row justify-center items-center">

                    <div className="w-[50%] flex flex-col justify-center items-center">

                        {statistics.map((item)=>(
                            <span className={` ${item.id === '1' ? "rounded-tl-[12px] border-b-[0.20px]" : "rounded-none border-b-[0.20px] "} w-full flex flex-col justify-center items-start p-4 bg-componentBg-mainBg   gap-y-[8px]  border-[#A6A6A6] border-solid`}>
                                <h4 className="text-[12px] text-[#A6A6A6] font-bold flex flex-row gap-x-1">
                                    {item.firstName}
                                </h4>
                                <p className="text-textsColor-texts text-[12px] font-bold ">{item.firstValue}</p>
                            </span>
                        ))}

                    </div>


                    <div className="w-[50%] flex flex-col justify-center items-center">
                        {statistics.map((item)=>(
                            <span className={` ${item.id === '1' ? "rounded-tr-[12px] border-b-[0.20px]" : "rounded-none border-b-[0.20px] "} w-full flex flex-col justify-center items-start p-4 bg-componentBg-mainBg2   gap-y-[8px]  border-[#A6A6A6] border-solid`}>
                                    {item.icon ? (
                                        <h4 className="text-[12px] text-[#A6A6A6] font-bold flex flex-row gap-x-1 ">
                                            {item.secondName}
                                            
                                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.49967 14.6663C12.1663 14.6663 15.1663 11.6663 15.1663 7.99967C15.1663 4.33301 12.1663 1.33301 8.49967 1.33301C4.83301 1.33301 1.83301 4.33301 1.83301 7.99967C1.83301 11.6663 4.83301 14.6663 8.49967 14.6663Z" stroke="#A6A6A6" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M8.49805 11.333L8.49805 7.99967" stroke="#A6A6A6" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M8.50195 6L8.49597 6" stroke="#A6A6A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </h4>
                                    ) : (
                                        <h4 className="text-[12px] text-[#A6A6A6] font-bold flex flex-row gap-x-1">
                                            {item.secondName}
                                        </h4>
                                    )}

                                <p className={` ${item.color === 'red' ? "text-[#FC3548]" : item.color === 'green' ? "text-[#1EC7B4]" : "text-textsColor-texts"} text-[12px] font-bold `}>{item.secondValue}</p>
                            </span>
                        ))}
                    </div>

                </div>

                <div className="w-full flex flex-col justify-center items-start gap-y-2 p-4 bg-componentBg-mainBg rounded-b-[12px]">
                    <h4 className="text-[#A6A6A6] texts-[12px] font-bold flex flex-row justify-center items-center gap-x-1">
                        Sharpe Ratio 
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.49967 14.6663C12.1663 14.6663 15.1663 11.6663 15.1663 7.99967C15.1663 4.33301 12.1663 1.33301 8.49967 1.33301C4.83301 1.33301 1.83301 4.33301 1.83301 7.99967C1.83301 11.6663 4.83301 14.6663 8.49967 14.6663Z" stroke="#A6A6A6" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M8.49805 11.333L8.49805 7.99967" stroke="#A6A6A6" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M8.50195 6L8.49597 6" stroke="#A6A6A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </h4>
                    <p className={` text-textsColor-texts text-[12px] font-bold `}>-</p>
                </div>

            </div>
        </div>
    )
}