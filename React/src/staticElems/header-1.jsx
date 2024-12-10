import React, { useEffect, useState } from 'react';
import notfication from '../Icons/vuesax/linear/notification.svg'
import Avatar from '../Icons/Avatar.svg'

export default function FirstHeader(){

    // این ها تماما برای اجرای عمل ناپدید شدن هدر در زمان اسکرول به پایین و پدیدار شدن هدر در زمان اسکرول به بالا
    const [showScroll , setShowScroll ] = useState(true)
    const [lastScroll , setLastScroll] = useState(0)
    // این ها تماما برای اجرای عمل ناپدید شدن هدر در زمان اسکرول به پایین و پدیدار شدن هدر در زمان اسکرول به بالا
    useEffect(()=>{
        const handleScroll = () => {
            const newScroll = window.scrollY
            if (newScroll > lastScroll && newScroll > 25 ){
                setShowScroll(false)
            }else if (newScroll < lastScroll ){
                setShowScroll(true)
            }
            setLastScroll(newScroll)
        }
        window.addEventListener('scroll' , handleScroll)
        return () => window.removeEventListener('scroll' , handleScroll)
    }, [lastScroll])

    return(
            <div className={`Header flex flex-row justify-between items-center bg-componentBg-mainBg w-full py-YP px-XP transition-all duration-300 ease-linear fixed top-0 left-0 ${showScroll ? " translate-y-0" : "translate-y-[-77px]"}`}>
                <h1 className='text-logoSize text-textsColor-texts '>Logo Place</h1>
                <div className='flex flex-row justify-center items-center gap-x-[16px]'>
                    <span className="name text-nameSize text-textsColor-texts">محمد</span>
                    <img className='w-[32px] h-[32px]' src={Avatar} alt="Avatar-icon" />
                    <img className='w-[32px] h-[32px]' src={notfication} alt="notfication-icon" />
                </div>
            </div>
    )
}