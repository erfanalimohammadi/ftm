import React, {useState , useEffect} from 'react';
import Header2 from '../staticElems/main-header/header-2';
import FirstPart from './componets/first-part/entrance';
import IconsPart from './componets/first-part/firstpartIcons/icons';
import UsersSlider from './componets/first-part/slider-1-Users/index-Slider';
export default function Homepage(){

    return(
        <div className='flex flex-col min-h-screen bg-componentBg-primeryBg justify-start w-full'>
            {/* header */}
            <Header2/>
            <FirstPart/>
            <IconsPart/>
            <UsersSlider/>
        </div>
    )
}