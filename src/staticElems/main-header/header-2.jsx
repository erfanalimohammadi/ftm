import React, {useState , useEffect} from "react";
import Search from '../../Icons/search-normal.svg'
import Links from "./Optional-links";
import Simplelinks from "./Simple-links";

export default function Header2() {

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
        <div className={`flex z-[999] flex-row justify-between items-center py-YP px-XP bg-componentBg-mainBg fixed top-0 left-0 w-full  transition-all duration-500 ease-linear ${showScroll ? " translate-y-0" : "translate-y-[-77px]"}`}>

                <div className="">
                    {/* Logo */}
                    <h1 className='text-logoSize text-textsColor-texts font-medium'>Logo place</h1>
                </div>

                <div className="flex flex-row justify-center items-center gap-x-[32px]">

                    <Links title="How it works"/>
                    <Simplelinks title="FAQ"/>
                    <Simplelinks title="Testimonials"/>
                    <Links title="Trading"/>
                    <Links title="About us"/>
                    <Simplelinks title="Academy"/>
                    <Simplelinks title=" Client Area "/>
                    <Links title="EN"/>{/* بعدا  تغیییر خواهد یافت  */}
                    <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"
                    className={`w-[24px] h-[24px] text-white hover:text-btnColors-Mailblue transition-all cursor-pointer duration-300 ease-linear`}
                    >
                        <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"  stroke-width="1.5"/>
                        <path d="M22 22L20 20"  stroke-width="1.5"/>
                    </svg>
                    </div>
                </div>
        </div>
    )
}