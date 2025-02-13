import React  from "react";

export default function Simplelinks({ title , /*link*/}){
    return(
        <div className="">
            {/* <Link to={link}>
                {title}
            </Link> */}
            <h3 className='hover:text-btnColors-Mailblue hover:scale-[1.02] cursor-pointer transition-all durition-300 text-textsColor-texts text-nameSize font-bold'>
                {title}
            </h3>
        </div>
    )
}