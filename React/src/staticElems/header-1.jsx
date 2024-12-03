import React from 'react';
import notfication from '../Icons/vuesax/linear/notification.svg'
import Avatar from '../Icons/Avatar.svg'

export default function FirstHeader(){
    return(
            <div className="Header flex flex-row justify-between items-center bg-componentBg-mainBg w-full py-YP px-XP fixed top-0 left-0 ">
                <h1 className='text-logoSize text-textsColor-texts '>Logo Place</h1>
                <div className='flex flex-row justify-center items-center gap-x-[16px]'>
                    <span className="name text-nameSize text-textsColor-texts">محمد</span>
                    <img className='w-[32px] h-[32px]' src={Avatar} alt="Avatar-icon" />
                    <img className='w-[32px] h-[32px]' src={notfication} alt="notfication-icon" />
                </div>
            </div>
    )
}