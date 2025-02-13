import React from 'react';
import Header2 from '../staticElems/main-header/header-2';
import FirstPart from './componets/first-part/entrance';
import IconsPart from './componets/first-part/firstpartIcons/icons';
import UsersSlider from './componets/first-part/slider-1-Users/index-Slider';
import Steps from './componets/second-part/Evaluation-Process-Part/Evaluation-Process';
import TradingObjectives from './componets/second-part/Trading-Objectives/index-of-TradingObjectives';
import FindOutSlider from './componets/third-part/FindOut-slider';
import IconsCountery from './componets/third-part/contreisIcon';
import CommentsSlider from './componets/fourth-part/Comments-Slider/Comments';
import YoutubeSlider from './componets/fourth-part/youtubers-Slider/slider';
import FooterPage from './componets/last-part/footer-of-page';

// این صفحه هنوز درحال تکمیل است ...

import Footer from '../staticElems/footer/Footer';
export default function Homepage(){

    return(
        <div className='flex flex-col min-h-screen bg-componentBg-primeryBg justify-start w-full'>
            {/* header */}
            <Header2/>
            <FirstPart/>
            <div className="min-w-[250px] max-w-[1376px] flex flex-col justify-start items-center gap-y-[120px] mx-auto mt-[5px]">
                <IconsPart/>
                <UsersSlider/>
                <Steps/>
                <TradingObjectives/>
                <FindOutSlider/>
                <IconsCountery/>
                <CommentsSlider/>
                <YoutubeSlider/>
                <FooterPage/>
            </div>             
            <Footer/>
        </div>
    )
}