import React, {useEffect , useState} from 'react';
import AccountsOverview from '../Icons/Accounts-Overview.svg'


export default function Sidebar(){

    const sideLinks = [
        { id : "1" ,title : 'Accounts Overview' , firstD : 'M12 18V15' , secondD : 'M10.0703 2.81985L3.14027 8.36985C2.36027 8.98985 1.86027 10.2998 2.03027 11.2798L3.36027 19.2398C3.60027 20.6598 4.96027 21.8098 6.40027 21.8098H17.6003C19.0303 21.8098 20.4003 20.6498 20.6403 19.2398L21.9703 11.2798C22.1303 10.2998 21.6303 8.98985 20.8603 8.36985L13.9303 2.82985C12.8603 1.96985 11.1303 1.96985 10.0703 2.81985Z', fill : false , /* link : 'http://../../' */ lengthh : 2 },

        { id : "2" ,title : 'Perimium' , firstD : 'M16.2904 2.15039H7.70044C6.00044 2.15039 5.25044 3.00039 4.79044 4.04039L2.23044 9.80039C1.77044 10.8404 2.02044 12.3904 2.79044 13.2304L9.65044 20.7704C10.9504 22.1904 13.0704 22.1904 14.3604 20.7704L21.2105 13.2204C21.9805 12.3704 22.2304 10.8304 21.7604 9.79039L19.2004 4.03039C18.7404 3.00039 17.9904 2.15039 16.2904 2.15039Z' , secondD : 'M3.5 8H20.5', fill : false ,lengthh : 2  },

        { id : "3" ,title : 'Profile' , firstD : 'M12.1596 10.87C12.0596 10.86 11.9396 10.86 11.8296 10.87C9.44957 10.79 7.55957 8.84 7.55957 6.44C7.55957 3.99 9.53957 2 11.9996 2C14.4496 2 16.4396 3.99 16.4396 6.44C16.4296 8.84 14.5396 10.79 12.1596 10.87Z' , secondD : 'M7.15973 14.56C4.73973 16.18 4.73973 18.82 7.15973 20.43C9.90973 22.27 14.4197 22.27 17.1697 20.43C19.5897 18.81 19.5897 16.17 17.1697 14.56C14.4297 12.73 9.91973 12.73 7.15973 14.56Z', fill : false ,lengthh : 2  },

        { id : "4" ,title : 'Traders' , firstD : 'M9.15957 10.87C9.05957 10.86 8.93957 10.86 8.82957 10.87C6.44957 10.79 4.55957 8.84 4.55957 6.44C4.55957 3.99 6.53957 2 8.99957 2C11.4496 2 13.4396 3.99 13.4396 6.44C13.4296 8.84 11.5396 10.79 9.15957 10.87Z' , secondD : 'M16.4103 4C18.3503 4 19.9103 5.57 19.9103 7.5C19.9103 9.39 18.4103 10.93 16.5403 11C16.4603 10.99 16.3703 10.99 16.2803 11' , thirdD : 'M4.15973 14.56C1.73973 16.18 1.73973 18.82 4.15973 20.43C6.90973 22.27 11.4197 22.27 14.1697 20.43C16.5897 18.81 16.5897 16.17 14.1697 14.56C11.4297 12.73 6.91973 12.73 4.15973 14.56Z' , fourthD : 'M18.3398 20C19.0598 19.85 19.7398 19.56 20.2998 19.13C21.8598 17.96 21.8598 16.03 20.2998 14.86C19.7498 14.44 19.0798 14.16 18.3698 14', fill : false ,lengthh : 4 },

        { id : "5" ,title : 'Academy' , firstD : 'M15.6261 12C15.5473 11.9921 15.4527 11.9921 15.366 12C13.4899 11.9369 12 10.398 12 8.50395C12 6.57046 13.5608 5 15.5 5C17.4313 5 19 6.57046 19 8.50395C18.9921 10.398 17.5023 11.9369 15.6261 12Z' , secondD : 'M11.4637 15.1142C9.5121 16.4294 9.5121 18.5726 11.4637 19.8797C13.6815 21.3734 17.3185 21.3734 19.5363 19.8797C21.4879 18.5645 21.4879 16.4213 19.5363 15.1142C17.3266 13.6286 13.6895 13.6286 11.4637 15.1142Z' , thirdD : 'M16 5V4C16 3.44772 15.5523 3 15 3H4C3.44772 3 3 3.44772 3 4V13C3 13.5523 3.44772 14 4 14H16' , fourthD : 'M5.5 10.5L5.94118 11L8.29412 8.22222L9.70588 9.88889L13 6' , fill : false ,lengthh : 4 },

        { id : "6" ,title : 'Billing' , firstD : 'M6.73 19.7C7.55 18.82 8.8 18.89 9.52 19.85L10.53 21.2C11.34 22.27 12.65 22.27 13.46 21.2L14.47 19.85C15.19 18.89 16.44 18.82 17.26 19.7C19.04 21.6 20.49 20.97 20.49 18.31V7.04C20.5 3.01 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3C3.5 20.97 4.96 21.59 6.73 19.7Z' , secondD : 'M8 7H16' , thirdD : 'M9 11H15' , fill : false ,lengthh : 3 },

        { id : "7" ,title : 'Leaderboard' , firstD : 'M12.1504 19.35C11.7404 19.35 11.4004 19.01 11.4004 18.6V16.5C11.4004 16.09 11.7404 15.75 12.1504 15.75C12.5604 15.75 12.9004 16.09 12.9004 16.5V18.6C12.9004 19.01 12.5604 19.35 12.1504 19.35Z' , secondD : 'M17.9004 22.75H6.40039V21C6.40039 19.48 7.63039 18.25 9.15039 18.25H15.1504C16.6704 18.25 17.9004 19.48 17.9004 21V22.75ZM7.90039 21.25H16.4004V21C16.4004 20.31 15.8404 19.75 15.1504 19.75H9.15039C8.46039 19.75 7.90039 20.31 7.90039 21V21.25Z', thirdD : 'M18.1504 22.75H6.15039C5.74039 22.75 5.40039 22.41 5.40039 22C5.40039 21.59 5.74039 21.25 6.15039 21.25H18.1504C18.5604 21.25 18.9004 21.59 18.9004 22C18.9004 22.41 18.5604 22.75 18.1504 22.75Z' , fourthD : 'M18.4297 12.4396C18.2197 12.4396 18.0097 12.3496 17.8597 12.1796C17.6697 11.9596 17.6197 11.6496 17.7397 11.3896C18.0797 10.6096 18.2497 9.77957 18.2497 8.90957V5.90957C18.2497 5.55957 18.1897 5.21957 18.0697 4.85957C18.0597 4.82957 18.0497 4.78957 18.0397 4.74957C18.0097 4.59957 17.9997 4.44957 17.9997 4.30957C17.9997 3.89957 18.3397 3.55957 18.7497 3.55957H19.3497C21.1397 3.55957 22.5997 5.05957 22.5997 6.90957C22.5997 8.43957 21.9697 9.94957 20.8797 11.0396C20.8597 11.0596 20.7997 11.1096 20.7897 11.1196C20.1997 11.6096 19.5297 12.1596 18.6297 12.4096C18.5597 12.4296 18.4997 12.4396 18.4297 12.4396ZM19.6797 5.08957C19.7297 5.35957 19.7497 5.63957 19.7497 5.90957V8.90957C19.7497 9.31957 19.7197 9.70957 19.6597 10.1096C19.7197 10.0596 19.7697 10.0196 19.8297 9.96957C20.6297 9.16957 21.0997 8.04957 21.0997 6.90957C21.0997 6.00957 20.4897 5.24957 19.6797 5.08957Z' , fifthD : 'M5.58039 12.3996C5.50039 12.3996 5.43039 12.3896 5.35039 12.3596C4.53039 12.0996 3.76039 11.6196 3.12039 10.9796C1.97039 9.70961 1.40039 8.31961 1.40039 6.84961C1.40039 5.02961 2.83039 3.59961 4.65039 3.59961H5.30039C5.55039 3.59961 5.79039 3.72961 5.93039 3.93961C6.07039 4.14961 6.09039 4.41961 5.99039 4.64961C5.83039 5.00961 5.75039 5.41961 5.75039 5.84961V8.84961C5.75039 9.70961 5.92039 10.5496 6.27039 11.3496C6.39039 11.6196 6.33039 11.9296 6.14039 12.1496C5.99039 12.3096 5.79039 12.3996 5.58039 12.3996ZM4.30039 5.12961C3.49039 5.28961 2.90039 5.98961 2.90039 6.84961C2.90039 7.93961 3.34039 8.98961 4.21039 9.94961C4.25039 9.99961 4.30039 10.0396 4.35039 10.0796C4.28039 9.66961 4.25039 9.25961 4.25039 8.84961V5.84961C4.25039 5.60961 4.27039 5.36961 4.30039 5.12961Z' , sixthD : 'M12 16.75C7.73 16.75 4.25 13.27 4.25 9V6C4.25 3.38 6.38 1.25 9 1.25H15C17.62 1.25 19.75 3.38 19.75 6V9C19.75 13.27 16.27 16.75 12 16.75ZM9 2.75C7.21 2.75 5.75 4.21 5.75 6V9C5.75 12.45 8.55 15.25 12 15.25C15.45 15.25 18.25 12.45 18.25 9V6C18.25 4.21 16.79 2.75 15 2.75H9Z', fill : true ,lengthh : 6},

        { id : "8" ,title : 'Certificates' , firstD : 'M4.25977 11.0204V15.9904C4.25977 17.8104 4.25977 17.8104 5.97977 18.9704L10.7098 21.7004C11.4198 22.1104 12.5798 22.1104 13.2898 21.7004L18.0198 18.9704C19.7398 17.8104 19.7398 17.8104 19.7398 15.9904V11.0204C19.7398 9.20043 19.7398 9.20043 18.0198 8.04043L13.2898 5.31043C12.5798 4.90043 11.4198 4.90043 10.7098 5.31043L5.97977 8.04043C4.25977 9.20043 4.25977 9.20043 4.25977 11.0204Z' , secondD : 'M17.5 7.63V5C17.5 3 16.5 2 14.5 2H9.5C7.5 2 6.5 3 6.5 5V7.56' , thirdD : 'M12.6298 10.99L13.1998 11.88C13.2898 12.02 13.4898 12.16 13.6398 12.2L14.6598 12.46C15.2898 12.62 15.4598 13.16 15.0498 13.66L14.3798 14.47C14.2798 14.6 14.1998 14.83 14.2098 14.99L14.2698 16.04C14.3098 16.69 13.8498 17.02 13.2498 16.78L12.2698 16.39C12.1198 16.33 11.8698 16.33 11.7198 16.39L10.7398 16.78C10.1398 17.02 9.67978 16.68 9.71978 16.04L9.77978 14.99C9.78978 14.83 9.70978 14.59 9.60978 14.47L8.93978 13.66C8.52978 13.16 8.69978 12.62 9.32978 12.46L10.3498 12.2C10.5098 12.16 10.7098 12.01 10.7898 11.88L11.3598 10.99C11.7198 10.45 12.2798 10.45 12.6298 10.99Z' , fill : false ,lengthh : 3},

        { id : "9" ,title : 'Downloads' , firstD : 'M16.4405 8.90039C20.0405 9.21039 21.5105 11.0604 21.5105 15.1104V15.2404C21.5105 19.7104 19.7205 21.5004 15.2505 21.5004H8.74047C4.27047 21.5004 2.48047 19.7104 2.48047 15.2404V15.1104C2.48047 11.0904 3.93047 9.24039 7.47047 8.91039' , secondD : 'M12 2V14.88' , thirdD : 'M15.3504 12.6504L12.0004 16.0004L8.65039 12.6504' , fill : false ,length : 3 },

        { id : "10" ,title : 'Social Media' , firstD : 'M20 18.2476H14.3409C14.0034 18.2476 13.6887 18.4178 13.504 18.7003L12 21L10.496 18.7003C10.3113 18.4178 9.9966 18.2476 9.65912 18.2476H4C3.44772 18.2476 3 17.7999 3 17.2476V5C3 4.44772 3.44772 4 4 4H20C20.5523 4 21 4.44772 21 5V17.2476C21 17.7999 20.5523 18.2476 20 18.2476Z' , secondD : 'M12.31 15.9545C12.14 16.0152 11.86 16.0152 11.69 15.9545C10.24 15.4539 7 13.3657 7 9.8264C7 8.26405 8.245 7 9.78 7C10.69 7 11.495 7.44494 12 8.13258C12.505 7.44494 13.315 7 14.22 7C15.755 7 17 8.26405 17 9.8264C17 13.3657 13.76 15.4539 12.31 15.9545Z', fill : false ,lengthh : 2 },
    ]

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
                    <div className="flex flex-row justify-start items-center px-6 py-3 w-full text-nameSize font-bold border-b-[1px] border-zinc-500
                    border-solid">Main Menu</div>
                    <div className="flex flex-col justify-start items-center w-full px-6 py-3 border-b-[1px] border-zinc-500
                    border-solid ">
                        {sideLinks.map((item) => (
                            item.lengthh === 2 ? (
                                <div key={item.id} className="group flex flex-row justify-start items-center w-full gap-x-[8px] py-4 cursor-pointer transition-all duration-300">
                                    <svg className="group-hover:stroke-btnColors-Mailblue stroke-white transition-all duration-300" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d={item.firstD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d={item.secondD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className="text-nameSize font-medium group-hover:text-btnColors-Mailblue transition-all duration-300">{item.title}</p>
                                    {/* <Link to={item.link} >{item.title}</Link> */}
                                </div>
                            ) : item.lengthh === 3 ? (
                                    <div key={item.id} className="group flex flex-row justify-start items-center w-full gap-x-[8px] py-4 cursor-pointer transition-all duration-300">
                                        <svg className="group-hover:stroke-btnColors-Mailblue stroke-white transition-all duration-300" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d={item.firstD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d={item.secondD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d={item.thirdD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <p className="text-nameSize font-medium group-hover:text-btnColors-Mailblue transition-all duration-300">{item.title}</p>
                                    </div>
                            ) : item.lengthh === 4 ? (
                                    <div key={item.id} className="group flex flex-row justify-start items-center w-full gap-x-[8px] py-4 cursor-pointer transition-all duration-300">
                                        <svg className="group-hover:stroke-btnColors-Mailblue stroke-white transition-all duration-300" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d={item.firstD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d={item.secondD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d={item.thirdD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d={item.fourthD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <p className="text-nameSize font-medium group-hover:text-btnColors-Mailblue transition-all duration-300">{item.title}</p>
                                    </div>
                            ) : item.lengthh === 6 ? ( 
                                    <div key={item.id} className="group flex flex-row justify-start items-center w-full gap-x-[8px] py-4 cursor-pointer transition-all duration-300">
                                        <svg className={` ${item.fill ? "fill-white group-hover:fill-btnColors-Mailblue" : "group-hover:stroke-btnColors-Mailblue stroke-white"} transition-all duration-300`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d={item.firstD} />
                                            <path d={item.secondD} />
                                            <path d={item.thirdD} />
                                            <path d={item.fourthD} />
                                            <path d={item.fifthD} />
                                            <path d={item.sixthD} />
                                        </svg>
                                        <p className="text-nameSize font-medium group-hover:text-btnColors-Mailblue transition-all duration-300">{item.title}</p>
                                    </div>
                            ) : null
                        ))} 
                    </div>

                    <div className="flex flex-col justify-start items-center w-full px-6 py-3 "></div> {/* Coming Soon... */}

                </div>
    )
}



