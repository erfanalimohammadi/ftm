import React from 'react';

export default function Balance(){
    return(
        <div className="">
            <h3 className="text-textsColor-texts text-nameSizev font-medium">Account Balance</h3>
            <div className="flex flex-row justify-between items-center flex-wrap gap-y-[16px] mt-[10px]">
                {/* Buttons */}
                {['200 000 USD', '100 000 USD', '50 000 USD', '25 000 USD', '10 000 USD'].map((amount) => (
                    <button
                        key={amount}
                        className=" transition-all duration-500 ease-in-out text-textsColor-texts text-nameSize font-medium rounded-lg py-[12px] px-[16px]
                        bg-componentBg-buttonBg flex justify-center items-center w-[232px] active:border-[2px]
                        border-btnColors-Mailblue border-solid "
                    >
                        {amount}
                    </button>
                ))}
            </div>
        </div>
    )
}