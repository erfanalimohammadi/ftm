import React from 'react';
import AccountsOverview from '../Icons/Accounts-Overview.svg'

export default function RouterElement(){
    return(
        <div className="flex flex-row justify-start items-center gap-x-4">
            <object 
                data={AccountsOverview}
                type="image/svg+xml" 
                className="w-[16px] h-[16px] text-textsColor-texts"
            />
            <p className='text-textsColor-routeText text-nameSize'>Trader  /  Accounts Overview  / <span className='font-medium text-textsColor-texts'>Free Trial</span></p>
        </div>
    )
}