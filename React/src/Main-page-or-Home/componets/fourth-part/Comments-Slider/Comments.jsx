import React from "react";
import Slider from "./Slider";

export default function CommentsSlider(){
    const stars = [1,2,3,4,5]
    return(
        <div className="flex flex-col justify-center items-center gap-y-[32px] w-[85%]">
            <div className="w-full flex flex-row justify-between items-center">
                <h3 className="text-[32px] text-textsColor-texts font-medium">What <span className="text-btnColors-Mailblue">people</span> say about FTMO</h3>
                <button className="text-nameSize text-textsColor-texts bg-btnColors-Mailblue rounded-lg py-3 px-4">ALL REVIEWS</button>
            </div>
            <div className="w-full flex flex-col gap-y-2 justify-start items-start">
                <div className="flex flex-row justify-start items-center gap-x-2">
                     <p className="text-textsColor-texts text-logoSize font-light">Excellent</p>
                    <div className="flex flex-row justify-center items-center gap-x-1">
                        {stars.map((star)=> (
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="16" height="16" transform="translate(0 0.5)" fill="#39B271"/>
                                <path d="M8 2.5L9.34708 6.6459H13.7063L10.1796 9.2082L11.5267 13.3541L8 10.7918L4.47329 13.3541L5.82037 9.2082L2.29366 6.6459H6.65292L8 2.5Z" fill="white"/>
                            </svg>
                        ))}
                    </div>
                </div>
                <div className="flex flex-row justify-start items-center gap-x-2">
                     <p className="text-textsColor-texts text-[14px] font-light">Rated 4.8 / 5 based on 16,263 reviews on</p>
                     <div className="flex flex-row justify-start items-center gap-x-1">
                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 0.5L9.79611 6.02786H15.6085L10.9062 9.44427L12.7023 14.9721L8 11.5557L3.29772 14.9721L5.09383 9.44427L0.391548 6.02786H6.20389L8 0.5Z" fill="#39B271"/>
                        </svg>
                        <p className="text-textsColor-texts text-[14px] font-light">Truspilot</p>
                     </div>
                </div>
            </div>
            <Slider/>
        </div>
    )
}