import React from "react";

export default function Options({ name /* link */}){

    return (
        <div className="w-full flex flex-row justify-between items-center gap-x-4">
            {name.map((item)=> (
                item === 'Mentor App' ? (
                    <button className="group px-3 py-4 w-[240.5px] bg-componentBg-primeryBg text-textsColor-texts text-[16px] font-bold flex flex-row justify-center items-center gap-x-[8px] border-zinc-400 border-[0.5px] border-solid cursor-pointer rounded-lg tracking-wider  hover:border-btnColors-Mailblue hover:text-btnColors-Mailblue transition-all duration-500 ">
                        <p>{item}</p>
                        
                        <svg className="group-hover:stroke-btnColors-Mailblue stroke-white transition-all duration-500" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.74967 14.6663C12.4163 14.6663 15.4163 11.6663 15.4163 7.99967C15.4163 4.33301 12.4163 1.33301 8.74967 1.33301C5.08301 1.33301 2.08301 4.33301 2.08301 7.99967C2.08301 11.6663 5.08301 14.6663 8.74967 14.6663Z"  stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.74805 11.333L8.74805 7.99967"  stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.75195 6L8.74597 6"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                    </button>
                ) : (
                    <button className="px-3 py-4 w-[240.5px] bg-componentBg-primeryBg text-textsColor-texts text-[16px] font-bold flex flex-row justify-center items-center gap-x-[8px] border-zinc-400 border-[0.5px] border-solid cursor-pointer rounded-lg tracking-wider  hover:border-btnColors-Mailblue hover:text-btnColors-Mailblue transition-all duration-500 ">
                        <p>{item}</p>
                    </button>
                )
            ))}

        </div>
    )
}