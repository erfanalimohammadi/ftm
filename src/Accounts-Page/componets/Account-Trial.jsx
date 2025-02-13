import React, { useState , useEffect } from "react";

export default function Trial( {login , date , result , visible , balance} ){

    //For check box of the visible and onVisible
    const [check, setCheck] = useState(visible);
    useEffect(() => {
      setCheck(visible);
    }, [visible]);
    const checkedClick = () => {
      setCheck((prev) => !prev); 
    };


    return (
        <div className="w-full flex flex-col justify-center items-center gap-y-[16px]">
            <h3 className="text-nameSize text-textsColor-texts font-bold w-full flex flex-row justify-start items-center  ">Free Trail</h3>

            <div className="w-full flex flex-col justify-center items-center gap-y-[10px] p-4 bg-componentBg-mainBg rounded-[12px]">
                <div className="w-full flex flex-row justify-start items-center ">
                    <h4 className="text-nameSize text-[#a7a7a7] font-medium"> Login: {login} </h4>
                </div>

                <div className="w-full flex flex-row justify-start items-center gap-x-8">
                    <div className="flex flex-row justify-center items-center gap-x-2">
                        <span className="text-nameSize text-[#a7a7a7] font-medium ">
                           Balance: 
                        </span>
                        <span className="text-nameSize text-textsColor-texts font-medium">{balance}</span>
                    </div>
                    <div className="flex flex-row justify-center items-center gap-x-2">
                        <span className="text-nameSize text-[#a7a7a7] font-medium ">
                        End: 
                        </span>
                        <span className="text-nameSize text-textsColor-texts font-medium">{date}</span>
                    </div>
                    <div className="flex flex-row justify-center items-center gap-x-2">
                        <span className="text-nameSize text-[#a7a7a7] font-medium ">
                        Result: 
                        </span>
                        <span className="text-nameSize text-[#FC3548] font-medium">{result}</span>
                    </div>
                </div>

                <div className="w-full flex flex-row justify-between items-center ">
                    <div className="flex flex-row justify-start items-center gap-x-8">
                        <div className="flex flex-row justify-center items-center gap-x-4 ">
                            <div className="p-2 flex justify-center items-center rounded-[8px] border-[1px] border-[#a7a7a7] border-solid"> 
                                <svg className="parent1-hover:stroke-btnColors-Mailblue stroke-textsColor-texts transition-all duration-500 ease-linear "  width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.66797 5.33301V26.6663H29.3346"  stroke-width="2.5" stroke-linecap="round"/>
                                    <path d="M5.33203 22.6667L10.6654 16.6667L14.6654 19.3333L23.9987 8L28.6654 12" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>

                            <span className=" parent1 hover:text-btnColors-Mailblue transition-all duration-500 ease-linear text-nameSize text-textsColor-texts cursor-pointer font-medium underline underline-offset-[2px] ">Credentials</span>

                        </div>
                        <div className="flex flex-row justify-center items-center gap-x-4 ">
                            <div className="p-2 flex justify-center items-center rounded-[8px] border-[1px] border-[#a7a7a7] border-solid"> 
                                <svg className="parent2-hover:stroke-btnColors-Mailblue stroke-textsColor-texts transition-all duration-500 ease-linear "  width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.1992 9.65625L21.9133 14.3703"  stroke-width="2.5" stroke-linecap="round"/>
                                    <path d="M20.5769 20.4521L13.8755 17.4404C13.6353 17.3324 13.4473 17.134 13.3525 16.8882L11.0695 10.971C10.9271 10.6019 11.0156 10.1836 11.2953 9.9039L16.4921 4.70711C16.8826 4.31658 17.5158 4.31658 17.9063 4.70711L26.863 13.6638C27.2535 14.0543 27.2535 14.6875 26.863 15.078L21.694 20.2471C21.4003 20.5407 20.9557 20.6223 20.5769 20.4521Z"  stroke-width="2.5" stroke-linecap="round"/>
                                    <path d="M13.4297 17.1992L4.0016 26.6273" stroke-width="2.5" stroke-linecap="round"/>
                                    <path d="M4 26.6279L5.88562 28.5135"  stroke-width="2.5" stroke-linecap="round"/>
                                    <path d="M6.82812 23.7979L8.71374 25.6835"  stroke-width="2.5" stroke-linecap="round"/>
                                </svg>
                            </div>

                            <span className=" parent2 hover:text-btnColors-Mailblue transition-all duration-500 ease-linear text-nameSize text-textsColor-texts cursor-pointer font-medium underline underline-offset-[2px] ">Metrix</span>

                        </div>
                        <div className="flex flex-row justify-center items-center gap-x-4 ">
                            <div className="p-2 flex justify-center items-center rounded-[8px] border-[1px] border-[#a7a7a7] border-solid"> 
                                <svg className="group-hover:stroke-btnColors-Mailblue stroke-textsColor-texts transition-all duration-500 ease-linear "  width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.6654 29.3337V13.4871C18.6654 11.4727 18.0448 10.667 16.5029 10.667H15.4945C13.9526 10.667 13.332 11.4727 13.332 13.4871V29.3337"  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M28.0013 29.3337V6.69577C28.0013 3.81807 27.3807 2.66699 25.8389 2.66699H24.8304C23.2886 2.66699 22.668 3.81807 22.668 6.69577V29.3337"  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M4 29.333V20.1645C4 18.142 4.62061 17.333 6.16242 17.333H7.17091C8.71273 17.333 9.33333 18.142 9.33333 20.1645V29.333"  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M2.66797 29.333H29.3346"  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>

                            <span className=" group hover:text-btnColors-Mailblue transition-all duration-500 ease-linear text-nameSize text-textsColor-texts cursor-pointer font-medium underline underline-offset-[2px] ">Analysis</span>

                        </div>
                    </div>

                    <div className="flex flex-row justify-center items-center gap-x-4 ">
                        <span className="text-textsColor-texts text-nameSize font-bold"> Visible </span>
                        <div
                        onClick={checkedClick} 
                        className={`w-[40px] cursor-pointer p-1 flex flex-row items-center ${check ? "justify-end bg-btnColors-Mailblue" : "justify-start bg-[#989898]"} rounded-[12px] transition-all duration-300 ease-linear`}>
                            <span className="w-4 h-4 rounded-[8px] bg-white "></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}