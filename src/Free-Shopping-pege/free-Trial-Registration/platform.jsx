import React from 'react';
import ButtonImage from '../../Icons/Image-Place.svg'
import ButtonImage2 from '../../Icons/Image-Place-2.svg'
import ButtonImage3 from '../../Icons/Image-Place-3.svg'
export default function Platform(){
    return(
        <div className="">
            <h3 className="text-textsColor-texts text-nameSizev font-medium">Platform</h3>
            <div className="flex flex-row justify-between items-center flex-wrap gap-[16px] mt-[10px]">
                {/* Buttons */}
                    <button
                        className="text-textsColor-texts text-nameSize font-medium rounded-lg py-[12px] px-[16px]
                        bg-componentBg-buttonBg flex justify-center items-center w-[232px]
                        active:border-[2px] border-btnColors-Mailblue border-solid transition-all duration-300 ease-linear"
                    >
                        <object 
                            data={ButtonImage}
                            type="image/svg+xml" 
                            className="w-[157px] h-[24px] cursor-pointer text-textsColor-texts"
                        />
                    </button>
                    <button
                        className="text-textsColor-texts text-nameSize font-medium rounded-lg py-[12px] px-[16px]
                        bg-componentBg-buttonBg flex justify-center items-center w-[232px]
                        active:border-[2px] border-btnColors-Mailblue border-solid transition-all duration-300 ease-linear"
                    >
                        <object 
                            data={ButtonImage2}
                            type="image/svg+xml" 
                            className="w-[157px] h-[24px] cursor-pointer text-textsColor-texts"
                        />
                    </button>
                    <button
                        className="text-textsColor-texts text-nameSize font-medium rounded-lg py-[12px] px-[16px]
                        bg-componentBg-buttonBg flex justify-center items-center w-[232px]
                        active:border-[2px] border-btnColors-Mailblue border-solid transition-all duration-300 ease-linear"
                    >
                        <object 
                            data={ButtonImage3}
                            type="image/svg+xml" 
                            className="w-[157px] h-[24px] cursor-pointer text-textsColor-texts"
                        />
                    </button>

            </div>
    </div>
    )
}