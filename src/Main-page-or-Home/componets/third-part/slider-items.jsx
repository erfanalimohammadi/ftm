import React from "react";
export default function Slider({title , /* img , linkOfButton */}){

    return(
        <div
        className="relative w-[250px] h-[300px] flex-shrink-0 rounded-[16px] shadow-lg bg-effect4 overflow-hidden gradient-border-left p-[1px]"
        style={{background : "linear-gradient(to top left, #1481FE 20%,  #1481FE 20%, #1481FE 20%, #1E1E1E 80%)"}}
        >

            <div className="relative w-full h-full bg-componentBg-mainBg overflow-hidden rounded-[16px] mx-auto flex flex-col justify-center items-center gap-y-6">

                <div className="flex w-[218px] h-[165px] rounded-lg justify-center items-center border-[0.25px] border-solid border-zinc-500">
                    <img className="w-[201px] h-[134px]" src="img" alt="Img" />
                </div>

                <div className="relative w-full flex flex-col justify-between items-center gap-y-2">
                    <h3>{title}</h3>
                    <button className="w-[87.2%] py-[10px] text-nameSize text-textsColor-texts font-medium glass-effect3 rounded-lg">
                         LEARN MORE
                    </button>
                    <div className="z-20 absolute right-4 bottom-0 w-[43px] h-[43px] rounded-[100px] bg-btnColors-Mailblue blur-[32px]"></div>
                </div>

            </div>


        </div>




    )




}