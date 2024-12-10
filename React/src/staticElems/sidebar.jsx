import React, {useEffect , useState} from 'react';
import AccountsOverview from '../Icons/Accounts-Overview.svg'


export default function Sidebar(){

    const [showScroll , setShowScroll ] = useState(true)
    const [lastScroll , setLastScroll] = useState(0)
    // برای عمل یکسان با هدر درست شده اند
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
                <div className={`flex flex-col justify-start items-center bg-componentBg-mainBg text-textsColor-texts
                 h-full fixed left-XP overflow ${showScroll ? "top-topSpace " : "top-3"} w-[270px] rounded-xl transition-all duration-300 ease-linear `}>

                    <div className="w-full py-8 flex flex-row justify-center items-center ">
                        <button className='px-10 py-3 flex justify-center items-center bg-btnColors-Mailblue
                         text-textsColor-texts rounded-lg'>New FTMO Challeng</button>
                    </div>
                    <div className="flex flex-row justify-start items-center px-6 py-3 w-full text-nameSize font-bold border-b-[1px] border-white
                    border-solid">Main Menu</div>
                    <div className="flex flex-col justify-start items-center w-full px-6 py-3 border-b-[1px] border-white border-solid">
                        <div className='group flex flex-row justify-start items-center w-full gap-x-[8px] py-3 cursor-pointer'>
                        <object 
                            data={AccountsOverview}
                            type="image/svg+xml" 
                            className="w-[24px] h-[24px] group-hover:text-btnColors-Mailblue transition-colors cursor-pointer"
                        />
                            {/* <Link>Accounts Overview</Link> */}
                            <p className='text-nameSize font-medium group-hover:text-btnColors-Mailblue'>Accounts Overview</p>
                        </div>
                        <div className='group flex flex-row justify-start items-center w-full gap-x-[8px] py-3 cursor-pointer'>
                        <object 
                            data={AccountsOverview}
                            type="image/svg+xml" 
                            className="w-[24px] h-[24px] group-hover:text-btnColors-Mailblue transition-colors cursor-pointer"
                        />
                            {/* <Link>Accounts Overview</Link> */}
                            <p className='text-nameSize font-medium group-hover:text-btnColors-Mailblue'>Accounts Overview</p>
                        </div>
                        <div className='group flex flex-row justify-start items-center w-full gap-x-[8px] py-3 cursor-pointer'>
                        <object 
                            data={AccountsOverview}
                            type="image/svg+xml" 
                            className="w-[24px] h-[24px] group-hover:text-btnColors-Mailblue transition-colors cursor-pointer"
                        />
                            {/* <Link>Accounts Overview</Link> */}
                            <p className='text-nameSize font-medium group-hover:text-btnColors-Mailblue'>Accounts Overview</p>
                        </div>
                        <div className='group flex flex-row justify-start items-center w-full gap-x-[8px] py-3 cursor-pointer'>
                        <object 
                            data={AccountsOverview}
                            type="image/svg+xml" 
                            className="w-[24px] h-[24px] group-hover:text-btnColors-Mailblue transition-colors cursor-pointer"
                        />
                            {/* <Link>Accounts Overview</Link> */}
                            <p className='text-nameSize font-medium group-hover:text-btnColors-Mailblue'>Accounts Overview</p>
                        </div>
                        <div className='group flex flex-row justify-start items-center w-full gap-x-[8px] py-3 cursor-pointer'>
                        <object 
                            data={AccountsOverview}
                            type="image/svg+xml" 
                            className="w-[24px] h-[24px] group-hover:text-btnColors-Mailblue transition-colors cursor-pointer"
                        />
                            {/* <Link>Accounts Overview</Link> */}
                            <p className='text-nameSize font-medium group-hover:text-btnColors-Mailblue'>Accounts Overview</p>
                        </div>
                        <div className='group flex flex-row justify-start items-center w-full gap-x-[8px] py-3 cursor-pointer'>
                        <object 
                            data={AccountsOverview}
                            type="image/svg+xml" 
                            className="w-[24px] h-[24px] group-hover:text-btnColors-Mailblue transition-colors cursor-pointer"
                        />
                            {/* <Link>Accounts Overview</Link> */}
                            <p className='text-nameSize font-medium group-hover:text-btnColors-Mailblue'>Accounts Overview</p>
                        </div>
                        <div className='group flex flex-row justify-start items-center w-full gap-x-[8px] py-3 cursor-pointer'>
                        <object 
                            data={AccountsOverview}
                            type="image/svg+xml" 
                            className="w-[24px] h-[24px] group-hover:text-btnColors-Mailblue transition-colors cursor-pointer"
                        />
                            {/* <Link>Accounts Overview</Link> */}
                            <p className='text-nameSize font-medium group-hover:text-btnColors-Mailblue'>Accounts Overview</p>
                        </div>
                        <div className='group flex flex-row justify-start items-center w-full gap-x-[8px] py-3 cursor-pointer'>
                        <object 
                            data={AccountsOverview}
                            type="image/svg+xml" 
                            className="w-[24px] h-[24px] group-hover:text-btnColors-Mailblue transition-colors cursor-pointer"
                        />
                            {/* <Link>Accounts Overview</Link> */}
                            <p className='text-nameSize font-medium group-hover:text-btnColors-Mailblue'>Accounts Overview</p>
                        </div>
                        <div className='group flex flex-row justify-start items-center w-full gap-x-[8px] py-3 cursor-pointer'>
                        <object 
                            data={AccountsOverview}
                            type="image/svg+xml" 
                            className="w-[24px] h-[24px] group-hover:text-btnColors-Mailblue transition-colors cursor-pointer"
                        />
                            {/* <Link>Accounts Overview</Link> */}
                            <p className='text-nameSize font-medium group-hover:text-btnColors-Mailblue'>Accounts Overview</p>
                        </div>
                        <div className='group flex flex-row justify-start items-center w-full gap-x-[8px] py-3 cursor-pointer'>
                        <object 
                            data={AccountsOverview}
                            type="image/svg+xml" 
                            className="w-[24px] h-[24px] group-hover:text-btnColors-Mailblue transition-colors cursor-pointer"
                        />
                            {/* <Link>Accounts Overview</Link> */}
                            <p className='text-nameSize font-medium group-hover:text-btnColors-Mailblue'>Accounts Overview</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start w-full px-6 py-3 ">
                        <div className='group flex flex-row justify-start items-center w-full gap-x-[8px] py-3 cursor-pointer'>
                            <object 
                                data={AccountsOverview}
                                type="image/svg+xml" 
                                className="w-[24px] h-[24px] group-hover:text-btnColors-Mailblue transition-colors cursor-pointer"
                            />
                                {/* <Link>Accounts Overview</Link> */}
                                <p className='text-nameSize font-medium group-hover:text-btnColors-Mailblue'>Accounts Overview</p>
                        </div>
                        <div className='group flex flex-row justify-start items-center w-full gap-x-[8px] py-3 cursor-pointer'>
                            <object 
                                data={AccountsOverview}
                                type="image/svg+xml" 
                                className="w-[24px] h-[24px] group-hover:text-btnColors-Mailblue transition-colors cursor-pointer"
                            />
                                {/* <Link>Accounts Overview</Link> */}
                                <p className='text-nameSize font-medium group-hover:text-btnColors-Mailblue'>Accounts Overview</p>
                        </div>
                        <div className='group flex flex-row justify-start items-center w-full gap-x-[8px] py-3 cursor-pointer'>
                            <object 
                                data={AccountsOverview}
                                type="image/svg+xml" 
                                className="w-[24px] h-[24px] group-hover:text-btnColors-Mailblue transition-colors cursor-pointer"
                            />
                                {/* <Link>Accounts Overview</Link> */}
                                <p className='text-nameSize font-medium group-hover:text-btnColors-Mailblue'>Accounts Overview</p>
                        </div>
                        <div className='group flex flex-row justify-start items-center w-full gap-x-[8px] py-3 cursor-pointer'>
                            <object 
                                data={AccountsOverview}
                                type="image/svg+xml" 
                                className="w-[24px] h-[24px] group-hover:text-btnColors-Mailblue transition-colors cursor-pointer"
                            />
                                {/* <Link>Accounts Overview</Link> */}
                                <p className='text-nameSize font-medium group-hover:text-btnColors-Mailblue'>Accounts Overview</p>
                        </div>
                        <div className='group flex flex-row justify-start items-center w-full gap-x-[8px] py-3 cursor-pointer'>
                            <object 
                                data={AccountsOverview}
                                type="image/svg+xml" 
                                className="w-[24px] h-[24px] group-hover:text-btnColors-Mailblue transition-colors cursor-pointer"
                            />
                                {/* <Link>Accounts Overview</Link> */}
                                <p className='text-nameSize font-medium group-hover:text-btnColors-Mailblue'>Accounts Overview</p>
                        </div>
                    </div>

                </div>
    )
}