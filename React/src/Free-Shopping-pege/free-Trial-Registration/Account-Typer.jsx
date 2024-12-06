import React from 'react';

export default function Typer(){
    return(
        <div className="">
            <h3 className="text-textsColor-texts text-nameSizev font-medium">Account Type (Leverage 1:100)</h3>
            
            <div className='flex flex-row justify-between items-center flex-wrap gap-[16px] mt-[10px]'>
                {['Prodcut name', 'Product name | Swing'].map((amount) => (
                        <button
                            key={amount}
                            className="text-textsColor-texts text-nameSize font-medium rounded-lg py-[12px] px-[16px]
                        bg-componentBg-buttonBg flex justify-center items-center w-[232px] active:border-[2px]
                        border-btnColors-Mailblue border-solid transition-all duration-300 ease-linear"
                        >
                            {amount}
                        </button>
                    ))}
            </div>
        </div>
    )
}