import React, { useState } from 'react';
import UnCheck from '../../Icons/uncheck.svg'
import Check from '../../Icons/check.svg'
import Optional from '../../Icons/optionalicon.svg'


export default function Checkboxs(){
    const [isChecked1, setIsChecked1] = useState(false); 
    const [isChecked2 , setIsChecked2] = useState(false)
    return(
        <div className=' flex flex-col justify-between items-start gap-y-[10px]'>
            <div className="flex flex-row justify-start items-center gap-x-[10px]">
                <div className='flex flex-row justify-center items-center'>
                    <input
                        type="checkbox"
                         id="custom-checkbox"
                        checked={isChecked1}
                        onChange={()=> setIsChecked1(!isChecked1)}
                        className="hidden"
                    />
                    <label
                        htmlFor="custom-checkbox"
                        className= " bg-cover bg-center w-[24px] h-[25px]"
                        style={{
                            backgroundImage: `url(${isChecked1 ? Check : UnCheck})`,
                        }}
                    >  
                    </label>
                </div>
                <div className="">
                    <p className='text-textsColor-texts text-nameSize font-medium' >
                        I agree to processing of personal data according to <span className='underline leading-5'>Privacy policy</span>
                    </p>
                </div>
            </div>

            <div className="flex flex-row justify-start items-center gap-x-[10px]">
                <div className='flex flex-row justify-center items-center'>
                    <input
                        type="checkbox"
                        id="custom-checkbox1"
                        checked={isChecked2}
                        onChange={()=> setIsChecked2(!isChecked2)}
                        className="hidden"
                    />
                    <label
                        htmlFor="custom-checkbox1"
                        className= " bg-cover bg-center w-[24px] h-[25px]"
                        style={{
                            backgroundImage: `url(${isChecked2 ? Check : UnCheck})`,
                        }}
                    >  
                    </label>
                </div>
                <div className="flex flex-row justify-start items-center gap-x-[6px]">
                    <p className='text-textsColor-texts text-nameSize font-medium' >
                    I want to subscribe to a newsletter. (Optional)
                    </p>

                    <object 
                        data={Optional}
                        type="image/svg+xml" 
                        className="w-[16px] h-[16px] text-textsColor-texts text-center"
                    />
                </div>
            </div>
        </div>
    )
}