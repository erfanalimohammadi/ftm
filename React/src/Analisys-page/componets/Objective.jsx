import React from "react";

export default function Objectives(){


    const content = [
        { id : '1' , name : 'titles' , value : ['+ Minimum 2 Trading Days','+ Max Daily Loss -$2’500','+Max Loss -$5’000','+Profit Target $2,500'] },

        { id : '2' , name : 'Results' , value : ['1','-$19,70 (-0.03%)','-$19,70 (-0.03%)','-$19,70 (-0.03%)'] },

        { id : '3' , name : 'Summary' , value : ['Incoplete' , 'Passed' , 'Passed' , 'Incoplete'] },
    ]

    return(
        <div className="w-full flex flex-col justify-between items-start gap-y-4 ">
            <h3 className="text-nameSize text-textsColor-texts font-bold ">Objectives</h3>

            <div className="w-full flex flex-row justify-center items-stretch ">
                {/* <div className="w-[40.69%] flex flex-col justify-center items-stretch">
                <span className={` rounded-tl-[12px] border-[#C4C4C4] border-solid border-b-[0.25px] p-4 flex flex-row justify-start items-center text-textsColor-texts text-[16px] font-bold bg-componentBg-mainBg2 gap-x-2`}></span>
                </div> */}

                {content.map((items)=> (
                    <div className={`${items.id === '1' ? "w-[40.69%]" : items.id === '2' ? "w-[29.10%]" : "w-[30.19%]" } flex flex-col justify-center items-stretch`}>
                        <span className={`${items.id === '1' ? "rounded-tl-xl bg-componentBg-mainBg" : items.id === '2' ? "rounded-none bg-componentBg-mainBg" : "rounded-tr-xl bg-componentBg-mainBg" } border-[#C4C4C4] border-solid border-b-[0.25px] py-6 px-4 flex flex-row justify-start items-center text-textsColor-texts text-[16px] font-bold `}> {items.name} </span>

                        {items.value.map((item)=> (
                            items.name === 'Summary' ? (
                                <span className={`${items.id === '1' ? "item-1 bg-componentBg-mainBg" : items.id === '2' ? "item-2 bg-componentBg-mainBg2" : "item-3 bg-componentBg-mainBg" } border-[#C4C4C4] border-solid border-b-[0.10px] py-6 px-4 flex flex-row justify-start items-center text-textsColor-texts text-[16px] font-medium gap-x-2`}>
                                     {item === 'Incoplete' ? (
                                         
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.19 0H5.81C2.17 0 0 2.17 0 5.81V14.18C0 17.83 2.17 20 5.81 20H14.18C17.82 20 19.99 17.83 19.99 14.19V5.81C20 2.17 17.83 0 14.19 0ZM13.36 12.3C13.65 12.59 13.65 13.07 13.36 13.36C13.21 13.51 13.02 13.58 12.83 13.58C12.64 13.58 12.45 13.51 12.3 13.36L10 11.06L7.7 13.36C7.55 13.51 7.36 13.58 7.17 13.58C6.98 13.58 6.79 13.51 6.64 13.36C6.35 13.07 6.35 12.59 6.64 12.3L8.94 10L6.64 7.7C6.35 7.41 6.35 6.93 6.64 6.64C6.93 6.35 7.41 6.35 7.7 6.64L10 8.94L12.3 6.64C12.59 6.35 13.07 6.35 13.36 6.64C13.65 6.93 13.65 7.41 13.36 7.7L11.06 10L13.36 12.3Z" fill="#FC3548"/>
                                        </svg>

                                     ) : (
                                        
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.19 0H5.81C2.17 0 0 2.17 0 5.81V14.18C0 17.83 2.17 20 5.81 20H14.18C17.82 20 19.99 17.83 19.99 14.19V5.81C20 2.17 17.83 0 14.19 0ZM14.78 7.7L9.11 13.37C8.97 13.51 8.78 13.59 8.58 13.59C8.38 13.59 8.19 13.51 8.05 13.37L5.22 10.54C4.93 10.25 4.93 9.77 5.22 9.48C5.51 9.19 5.99 9.19 6.28 9.48L8.58 11.78L13.72 6.64C14.01 6.35 14.49 6.35 14.78 6.64C15.07 6.93 15.07 7.4 14.78 7.7Z" fill="#1EC7B4"/>
                                        </svg>
                                     )}
                                    {item}
                                </span>
                            ) : (
                                <span className={`${items.id === '1' ? "item-1 bg-componentBg-mainBg" : items.id === '2' ? "item-2 bg-componentBg-mainBg2" : "item-3 bg-componentBg-mainBg" } border-[#C4C4C4] border-solid border-b-[0.10px] py-6 px-4 flex flex-row justify-start items-center text-textsColor-texts text-[16px] font-medium `}> {item} </span>
                            )
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}