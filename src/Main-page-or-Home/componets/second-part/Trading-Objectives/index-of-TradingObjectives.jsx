import React from "react";
import BalanceButton from "./components-of-tradingobjectives/Balance";
import TradingSteps from "./components-of-tradingobjectives/trading-Steps";
export default function TradingObjectives(){
    return(
        <div className="flex flex-col justify-between gap-y-[48px] items-center p-8 rounded-2xl bg-componentBg-mainBg w-[85%]">

            <div className="flex flex-col justify-between items-start w-full gap-y-8">
                <h3 className="text-textsColor-texts text-[32px] font-bold ">Trading Objectives</h3>
                <p className="flex flex-col justify-between items-start gap-y-4">
                    <div className="text-textsColor-texts text-[14px] text-start font-light leading-[21px]">
                        FTMO's Trading Objectives are based on risk management principles, and they verify that our clients can manage them effectively. By adhering to these objectives, clients enhance <br/> their skills and build healthy and sustainable trading habits. 
                    </div>
                    <div className="text-textsColor-texts text-[14px] text-start font-light leading-[21px]">
                        Upon accomplishing Trading Objectives during FTMO Challenge and Verification, clients gain access to an FTMO Account. These objectives will remain in place, except <br /> for the Profit Target.
                    </div>
                </p>
            </div>

            <div className="flex flex-col justify-between items-start w-full gap-y-4">
                <h3 className="text-textsColor-texts text-nameSize font-bold ">Balance:</h3>
                <div className="flex w-full flex-row justify-between items-center">
                    <div className="flex flex-row justify-start items-center gap-x-4">
                        <BalanceButton price={"10,000"} discount={"0"}/>
                        <BalanceButton price={"25,000"} discount={"10"}/>
                        <BalanceButton price={"50,000"} discount={"10"}/>
                        <BalanceButton price={"100,000"} discount={"10"}/>
                        <BalanceButton price={"200,000"} discount={"10"}/>
                    </div>

                    <div className="">
                        <button className="px-4 py-[10.4px] text-textsColor-texts text-nameSize font-light border-[2px] border-white border-solid hover:border-btnColors-Mailblue hover:text-btnColors-Mailblue rounded-lg transition-all duration-500 hover:font-bold">Quick comparison</button>
                    </div>
                </div>
            </div>

            <TradingSteps/>

            <div className="flex justify-center items-center w-full">
                <button className="text-nameSize text-textsColor-texts font-bold px-8 py-4 bg-btnColors-Mailblue rounded-lg">
                   START FTMO CHALLENGE
                </button>
            </div>
        </div>
    )
}