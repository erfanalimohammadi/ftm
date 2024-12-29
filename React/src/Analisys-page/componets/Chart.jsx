import React from "react";
import FackChart from '../../Icons/jpgIcons/Frame860.jpg'
export default function Chart(){

    return(
        <div className="w-[66%] flex flex-col justify-center items-start gap-y-[16px]">
            <h3 className="text-textsColor-texts text-nameSize font-bold ">Current Results</h3>
            <img src={FackChart} alt="image" /> {/* Comming Soon... */}
        </div>
    )
}