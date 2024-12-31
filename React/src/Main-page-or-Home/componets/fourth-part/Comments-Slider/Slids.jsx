import React from "react";

export default function Slides({stars , name , comment}){


    return (
        <div className="w-full bg-componentBg-buttonBg flex flex-col justify-center items-center p-4 gap-y-8 rounded-lg">
            <div className="w-full flex flex-row justify-start items-center gap-x-2 ">
                <div className="flex flex-row gap-x-1">
                    {stars.map((item)=>(
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="16" height="16" transform="translate(0 0.5)" fill="#39B271"/>
                            <path d="M8 2.5L9.34708 6.6459H13.7063L10.1796 9.2082L11.5267 13.3541L8 10.7918L4.47329 13.3541L5.82037 9.2082L2.29366 6.6459H6.65292L8 2.5Z" fill="white"/>
                        </svg>
                    ))}

                </div>
                <div className="flex flex-row gap-x-1">
                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 1.5C3.245 1.5 1 3.745 1 6.5C1 9.255 3.245 11.5 6 11.5C8.755 11.5 11 9.255 11 6.5C11 3.745 8.755 1.5 6 1.5ZM8.39 5.35L5.555 8.185C5.485 8.255 5.39 8.295 5.29 8.295C5.19 8.295 5.095 8.255 5.025 8.185L3.61 6.77C3.465 6.625 3.465 6.385 3.61 6.24C3.755 6.095 3.995 6.095 4.14 6.24L5.29 7.39L7.86 4.82C8.005 4.675 8.245 4.675 8.39 4.82C8.535 4.965 8.535 5.2 8.39 5.35Z" fill="white"/>
                    </svg>
                    <p className="text-textsColor-texts text-[14px] font-medium">Varified</p>
                </div>
            </div>
            <div className="w-full flex flex-row justify-start items-center gap-x-2">
                <p className="text-textsColor-texts text-[14px] font-medium ">{name}</p>
                <p className="text-zinc-500 text-[14px] font-light ">7 hours ago</p>
            </div>
            <div className="w-full flex flex-row justify-start items-center ">
                <p className="text-start text-textsColor-texts text-[14px] font-medium leading-[21px]">
                    {comment}
                </p>
            </div>
        </div>
    )
}