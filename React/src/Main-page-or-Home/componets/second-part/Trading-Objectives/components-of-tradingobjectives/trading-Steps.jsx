import React from "react";

export default function TradingSteps(){
    const stepsButtons = [
        {name: 'Step 1' , content : 'FTMO Challenge' , /* link : 'FTMO/....' */},
        {name: 'Step 2' , content : 'Verification' , /* link : 'FTMO/....' */},
        {name: 'Step 3' , content : 'FTMO Trader' , /* link : 'FTMO/....' */}
    ]
    const stepsOptions = [
        {name : 'Trading Period' , steps: ['unlimited' , 'unlimited' , 'unlimited']},
        {name : 'Minimum trading days' , steps: ['4 days' , '4 days' , 'X']},
        {name : 'Maximum Daily Loss' ,  steps : ['$500' , '$500' , '$500']},
        {name : 'Maximum Loss' , steps : ['$1,000' , '$1,000' , '$1,000']},
        {name : 'Profit Target' , steps : ['$1,000' , '$1,000' , 'X']},
        {name : 'Refundable Fee' , steps : ['$155' , 'free' , 'refund']}
    ]
    return(
        <div className="w-full flex flex-col justify-start items-center gap-y-4">

            <div className="w-full flex flex-col justify-center gap-y-4 items-center">

                <div className="w-full flex flex-row justify-end items-center gap-x-[14px]">
                    {stepsButtons.map(button => (
                        <div className="w-[23.90%] h-12 bg-componentBg-mainBg text-textsColor-texts border-white border-[1px] border-solid rounded-lg flex flex-col justify-center items-center py-3 px-4">
                            <h3 className="text-textsColor-texts text-[14px] font-light leading-[21px]"> {button.name} </h3>
                            <p className="text-textsColor-texts text-[14px] font-light leading-[21px]"> {button.content} </p>
                        </div>
                    ))}
                </div>

                    {stepsOptions.map(option => (
                        <div className="w-full flex flex-row justify-center items-center gap-x-[14px]">
                            <div className="w-[24.45%] h-12 bg-componentBg-buttonBg text-btnColors-Mailblue rounded-lg flex flex-row justify-start items-center py-3 px-3 gap-x-[10px] cursor-pointer">
                                
                                <svg className="cursor-pointer" width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.9181 0.950195L10.3981 7.4702C9.62812 8.2402 8.36813 8.2402 7.59813 7.4702L1.07812 0.950195" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                                <p className="text-[14px] font-medium text-btnColors-Mailblue">{option.name}</p>
                            </div>
                            {option.steps.map(step => (
                                <div className="w-[23.90%] h-12 bg-componentBg-buttonBg text-textsColor-texts rounded-lg flex flex-col justify-center items-center py-3 px-4">
                                    {step}
                                </div>
                            ))}
                        </div>
                    ))}
            </div>

            <div className="w-full flex flex-row justify-start gap-x-2 shadow-[0px_0px_20px_-10px_#1EC7B4] bg-[#1EC7B466] rounded-lg border-[1px] border-solid border-[#1EC7B4] items-start py-[7px] px-3">
                
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11.9961 17L11.9961 12" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12.0039 9L11.9949 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p className="text-textsColor-texts text-[14px] font-light ">
                    Special Promotion: The $10,000 FTMO Challenge is now available for just €89. This offer is exclusively for clients who currently do not have an active $10,000 FTMO Challenge (or the equivalent in another currency).
                </p>

            </div>

        </div>
    )
}