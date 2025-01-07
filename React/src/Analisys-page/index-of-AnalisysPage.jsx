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
export default function Analisys(){

    return (
        <div className="flex flex-col min-h-screen bg-componentBg-primeryBg justify-start w-full box-border">
            <FirstHeader/>
            <div className="flex flex-row w-full min-h-screen">
                <Sidebar/>

                <div className="flex flex-col justify-start items-start mt-topSpace w-[66%] ml-[360px] gap-y-[48px]">
                    <div className="w-full flex flex-col justify-start items-start gap-y-[22px]">
                        <RouterElement/>
                        <Account/>
                        <Buttons/>
                        <div className="w-full flex flex-row justify-between items-start gap-x-[32px]">
                            <AnalisysChart/> 
                            <Trial/>
                        </div>
                    </div>
                    <LineChart/>
                    <Objectives/>
                    <Options name={['Trading Journal' , 'Mentor App' , 'Economic Calendar', 'Useful Links']} />
                </div>
            </div>
        </div>
    )
}