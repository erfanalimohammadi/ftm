import React from "react";
import Received from "./message";
import Box from "./payment-box";

export default function Seccessfuly(){

    return(
        <div className="w-full bg-componentBg-mainBg py-12 px-8 rounded-[16px] flex flex-col  gap-y-4">
            <Received/>
            <Box number={'20568362'} size={'$10,000'} type={'FTMO'} platform={'MT4'} national={'USD'} paid={'$165,08'} />
        </div>
    )
}