import React from "react";

export default function Buttons(){

    return(
        <div className="w-full flex flex-row justify-start items-center gap-x-[16px]">
                <button className="group px-3 py-4 bg-componentBg-primeryBg text-textsColor-texts text-[16px] font-bold flex flex-row justify-center items-center gap-x-[8px] border-zinc-400 border-[0.5px] border-solid cursor-pointer rounded-lg tracking-wider  hover:border-btnColors-Mailblue hover:text-btnColors-Mailblue transition-all duration-500 ">
                    <p>Credentials</p>
                    <svg className="group-hover:stroke-btnColors-Mailblue stroke-white transition-all duration-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.8994 7.24219L16.4349 10.7777" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M15.2754 15.2684L10.5004 13.1224C10.2602 13.0145 10.0722 12.816 9.97737 12.5703L8.36064 8.37998C8.21825 8.01093 8.30679 7.59262 8.5865 7.31291L12.1923 3.70711C12.5828 3.31658 13.216 3.31658 13.6065 3.70711L19.9705 10.0711C20.361 10.4616 20.361 11.0948 19.9705 11.4853L16.3924 15.0633C16.0988 15.357 15.6542 15.4386 15.2754 15.2684Z"  stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M10.0713 12.8994L3.00022 19.9705" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M3 19.9707L4.41421 21.3849" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M5.12109 17.8486L6.53531 19.2628" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                </button>

                <button className="group px-3 py-4 bg-componentBg-primeryBg text-textsColor-texts text-[16px] font-bold flex flex-row justify-center items-center gap-x-[8px] border-zinc-400 border-[0.5px] border-solid cursor-pointer rounded-lg tracking-wider  hover:border-btnColors-Mailblue hover:text-btnColors-Mailblue transition-all duration-500 ">
                    <p>Contact us</p>
                    <svg className="group-hover:stroke-btnColors-Mailblue stroke-white transition-all duration-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="6" y="3" width="12" height="18" rx="1"/>
                        <path d="M10 18L14 18" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                </button>

                <button className="group px-3 py-4 bg-componentBg-primeryBg text-textsColor-texts text-[16px] font-bold flex flex-row justify-center items-center gap-x-[8px] border-zinc-400 border-[0.5px] border-solid cursor-pointer rounded-lg tracking-wider  hover:border-btnColors-Mailblue hover:text-btnColors-Mailblue transition-all duration-500 ">
                    <p>Refresh</p>
                    <svg className="group-hover:stroke-btnColors-Mailblue group-hover:rotate-[-360deg] stroke-white transition-all duration-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.55 21.67C18.84 20.54 22 16.64 22 12C22 6.48 17.56 2 12 2C5.33 2 2 7.56 2 7.56M2 7.56V3M2 7.56H4.01H6.44" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2 12C2 17.52 6.48 22 12 22" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3 3"/>
                    </svg>
                </button>

                <button className="group px-3 py-4 bg-componentBg-primeryBg text-textsColor-texts text-[16px] font-bold flex flex-row justify-center items-center gap-x-[8px] border-zinc-400 border-[0.5px] border-solid cursor-pointer rounded-lg tracking-wider  hover:border-btnColors-Mailblue hover:text-btnColors-Mailblue transition-all duration-500 ">
                    <p>Share</p>
                    <svg className="group-hover:stroke-btnColors-Mailblue stroke-white transition-all duration-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V12M16 6L12 2M12 2L8 6M12 2V15" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
        </div>
    )
}


