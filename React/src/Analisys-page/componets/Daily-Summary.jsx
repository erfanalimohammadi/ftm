import React from "react";

export default function DailySummary(){

    const tableData = [{data : '8 Nov' , trades : '2' , lots : '2.00' , result : '-$19.70'}]

    return(
        <div className="flex flex-col w-[50%] justify-start items-center gap-y-4">
            <h3 className="flex flex-row justify-start items-center gap-x-2 w-full text-textsColor-texts text-nameSize font-bold">
                Daily Summary
                
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.99967 14.6663C11.6663 14.6663 14.6663 11.6663 14.6663 7.99967C14.6663 4.33301 11.6663 1.33301 7.99967 1.33301C4.33301 1.33301 1.33301 4.33301 1.33301 7.99967C1.33301 11.6663 4.33301 14.6663 7.99967 14.6663Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.99805 11.333L7.99805 7.99967" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.00195 6L7.99597 6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.33366 14.6663V6.74308C9.33366 5.73589 9.02336 5.33301 8.25245 5.33301H7.7482C6.97729 5.33301 6.66699 5.73589 6.66699 6.74308V14.6663" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M13.9997 14.6663V3.3474C13.9997 1.90855 13.6894 1.33301 12.9185 1.33301H12.4142C11.6433 1.33301 11.333 1.90855 11.333 3.3474V14.6663" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2 14.667V10.0827C2 9.07149 2.3103 8.66699 3.08121 8.66699H3.58545C4.35636 8.66699 4.66667 9.07149 4.66667 10.0827V14.667" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1.33301 14.667H14.6663" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </h3>

            <div className="w-full bg-componentBg-mainBg h-[466.44px] rounded-[12px]">
                <table className="w-full">
                    <thead className="w-full flex flex-row justify-center items-center border-b-[0.5px] border-[#A6A6A6] border-solid">
                        <th className="w-[25%] p-4 flex flex-row justify-start items-center rounded-tl-[12px] text-btnColors-Mailblue font-bold text-[12px]">Date</th>
                        <th className="w-[25%] p-4 flex flex-row justify-start items-center text-btnColors-Mailblue font-bold text-[12px]">Trades</th>
                        <th className="w-[25%] p-4 flex flex-row justify-start items-center text-btnColors-Mailblue font-bold text-[12px]">Lots</th>
                        <th className="w-[25%] p-4 flex flex-row justify-start items-center rounded-tr-[12px] text-btnColors-Mailblue font-bold text-[12px]">Result</th>
                    </thead>
                    <tbody className="w-full flex flex-row justify-center items-center">
                        {tableData.map((item) => (
                            <tr className=" w-full flex flex-row justify-center items-center">
                                <td className="w-[25%] p-4 flex flex-row justify-start items-center text-textsColor-texts font-bold text-[12px] t-rows">{item.data}</td>
                                <td className="w-[25%] p-4 flex flex-row justify-start items-center text-textsColor-texts font-bold text-[12px] t-rows">{item.trades}</td>
                                <td className="w-[25%] p-4 flex flex-row justify-start items-center text-textsColor-texts font-bold text-[12px] t-rows">{item.lots}</td>
                                <td className="w-[25%] p-4 flex flex-row justify-start items-center text-[#FC3548] font-bold text-[12px] t-rows">{item.result}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    )
}