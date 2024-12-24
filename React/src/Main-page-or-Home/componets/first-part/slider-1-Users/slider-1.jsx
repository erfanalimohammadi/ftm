import React from "react";
export default function Slider({ name , region , bg , img , counteryIcon}){

    return(
        <div
        className="relative w-[200px] h-[250px] rounded-lg overflow-hidden shadow-lg bg-cover bg-center bg-no-repeat"
        style={{
            backgroundImage:`url(${bg})`
        }}
        >
            <div className="absolute inset-0 bg-black/80"></div>

            <div className="mx-auto mt-3 flex flex-row justify-start items-center p-1 rounded-lg gap-x-1 glass-effect w-[85%]">
                <img src={counteryIcon} className='w-[39px] h-24px]' alt="" />
                <div className="flex flex-col justify-center items-start ">
                    <h3 className='text-textsColor-texts text-[10px] leading-[12px] font-bold'>{name}</h3>
                    <p className='text-textsColor-texts text-[10px] leading-[12px] font-light'>From {region}</p>
                </div>
            </div>

            <div className="relative translate-y-[2px] bottom-0 z-10 text-white">
                <img
                src={img}
                alt="Avatar"
                className="mx-auto"
                />
            </div>

            <div className="absolute z-50 bottom-0 left-[2px]">

                <svg className='cursor-pointer' width="80" height="63" viewBox="0 0 80 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_196_2319)">
                        <rect x="16" y="24" width="40" height="23" rx="6" fill="#FF0000"/>
                        <path d="M43 35L32.5 41.0622L32.5 28.9378L43 35Z" fill="white"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_196_2319" x="-8" y="0" width="88" height="71" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset/>
                            <feGaussianBlur stdDeviation="12"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0.32 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_196_2319"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_196_2319" result="shape"/>
                        </filter>
                    </defs>
                </svg>

            </div>
        </div>
    )
}