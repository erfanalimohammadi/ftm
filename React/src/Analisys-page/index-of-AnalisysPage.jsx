import React from "react";
import FirstHeader from "../staticElems/header-1";
import Sidebar from "../staticElems/sidebar";
import RouterElement from "../staticElems/routerElem";
import Account from "./componets/Account";
import Buttons from "./componets/Buttons";
import Chart from "./componets/Chart";
import Trial from "./componets/Free-Trial";
export default function Analisys(){

    return (
        <div className="flex flex-col min-h-screen bg-componentBg-primeryBg justify-start w-full box-border">
            <FirstHeader/>
            <div className="flex flex-row w-full min-h-screen">
                <Sidebar/>

                <div className="flex flex-col justify-start items-start mt-topSpace w-[66%] ml-[360px] gap-y-[16px]">
                    <RouterElement />
                    <Account/>
                    <Buttons/>
                    <div className="w-full flex flex-row justify-between items-start gap-x-[32px]">
                        <Chart/>
                        <Trial/>
                    </div>
                </div>
            </div>
        </div>
    )
}