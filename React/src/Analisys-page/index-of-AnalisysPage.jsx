import React from "react";

import FirstHeader from "../staticElems/header-1";
import Sidebar from "../staticElems/sidebar";
import RouterElement from "../staticElems/routerElem";
import Account from "./componets/Account";
import Buttons from "./componets/Buttons";
import Trial from "./componets/Free-Trial";
import AnalisysChart from './componets/Chart'
import LineChart from "./componets/Chart2";
import Objectives from "./componets/Objective";
import Options from "./componets/Options";
import Statistics from "./componets/Statistics";
import DailySummary from "./componets/Daily-Summary";
import TradingJournal from "./componets/Trading-Journal";

import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";
export default function Analisys(){

    const {pages} = useParams()
    const { previousLocation, loginData } = useSelector((state) => state.app);
    // const data = loginData.filter( (item) => item.id ===  id )
    console.log(previousLocation , pages);
    
    

    return (
        <div className="flex flex-col min-h-screen bg-componentBg-primeryBg justify-start w-full box-border">
            <FirstHeader/>
            <div className="flex flex-row w-full min-h-screen">
                <Sidebar/>

                <div className="flex flex-col justify-start items-start mt-topSpace w-[66%] ml-[360px] gap-y-[48px]">
                    <div className="w-full flex flex-col justify-start items-start gap-y-[22px]">
                        <RouterElement location={previousLocation}/>
                        <Account/>
                        <Buttons/>
                        <div className="w-full flex flex-row justify-between items-start gap-x-[32px]">
                            <AnalisysChart/> 
                            <Trial/>
                        </div>
                    </div>
                    <LineChart/>
                    <Objectives/>
                    <Options name={['Trading Journal' , 'Mentor App' , 'Economic Calendar' , 'Useful Links']} />
                    <div className="w-full flex flex-row justify-between items-start gap-x-[32px]">
                        <Statistics/>
                        <DailySummary/>
                    </div>
                    <TradingJournal/>
                    <div className="w-full px-8 py-6 bg-btnColors-Mailblue shadow-[0px_0px_10px_#1481FE] rounded-[12px]">
                        <p className="text-nameSize text-textsColor-texts font-medium text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                    <div className="w-full p-4 flex flex-col justify-between items-start gap-y-[16px]">
                        <div className="flex flex-row justify-start items-center gap-x-[12px]">
                        <h3 className="flex flex-row gap-x-[8px] text-textsColor-texts font-bold text-[12px] underline">
                            Privacy policy
                        </h3>
                        <h3 className="flex flex-row gap-x-[8px] text-textsColor-texts font-bold text-[12px] underline">
                            Terms & Conditions
                        </h3>
                        </div>
                        <p className="text-justify text-nameSize text-textsColor-texts">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}