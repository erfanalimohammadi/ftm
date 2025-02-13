import React from "react";
import Arabic from '../../../Icons/jpgIcons/countreis/Frame12.jpg'
import Czech from '../../../Icons/jpgIcons/countreis/Frame1.jpg'
import Spanish from '../../../Icons/jpgIcons/countreis/Frame2.jpg'
import French from '../../../Icons/jpgIcons/countreis/Frame11.jpg'
import German from '../../../Icons/jpgIcons/countreis/Frame3.jpg'
import Italian from '../../../Icons/jpgIcons/countreis/Frame4.jpg'
import Russian from '../../../Icons/jpgIcons/countreis/Frame5.jpg'
import English from '../../../Icons/jpgIcons/countreis/Frame6.jpg'
import Vietnamese from '../../../Icons/jpgIcons/countreis/Frame7.jpg'
import Turkish from '../../../Icons/jpgIcons/countreis/Frame8.jpg'
import Serbian from '../../../Icons/jpgIcons/countreis/Frame9.jpg'
import Portuguese from '../../../Icons/jpgIcons/countreis/Frame10.jpg'
export default function Countery({ img , name}){
    return(
        <>
           <div className="w-[181px] h-[53px] rounded-[8px] flex flex-row justify-start items-center gap-x-3 px-3 gradient-border-left bg-componentBg-buttonBg p-[0.25px]"
           style={{background : "linear-gradient(to right, #1E1E1E 40% , #1481FE )"}}
           >
            <div className="w-full h-full bg-componentBg-mainBg overflow-hidden rounded-[8px] mx-auto flex flex-row justify-start items-center gap-x-2 ">
                <img className="rounded-[4px]" src={img} alt="img" />
                <p className="text-textsColor-texts text-nameSize font-light">{name}</p>
            </div>
           </div>
        </>
    )
}