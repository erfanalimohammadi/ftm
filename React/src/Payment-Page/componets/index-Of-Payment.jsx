import React from "react"
import FirstHeader from "../../staticElems/header-1"
import Sidebar from "../../staticElems/sidebar"
import RouterElement from "../../staticElems/routerElem"
import Seccessfuly from "./successful/seccessful"
import Methods from "./payment-method"
export default function PaymentPage(){

    return (
        <div className="flex flex-col min-h-screen bg-componentBg-primeryBg justify-start w-full box-border">
            <FirstHeader/>
            <div className="flex flex-row w-full min-h-screen">
                <Sidebar/>

                <div className="flex flex-col justify-start items-start mt-topSpace w-[66%] ml-[360px] gap-y-[48px]">
                    <div className="w-full flex flex-col justify-start items-start gap-y-[22px]">
                        <RouterElement/>
                        <Seccessfuly/>
                        <Methods/>
                    </div>
                </div>
            </div>
        </div>
    )
}