import React from 'react';

export default function RouterElement({location}){

    const mainLocation = location

    
    
    return(

        <div className="flex flex-row justify-start items-center gap-x-4">


            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 12V10" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.71318 1.88023L2.09318 5.58023C1.57318 5.99356 1.23985 6.86689 1.35318 7.52023L2.23985 12.8269C2.39985 13.7736 3.30652 14.5402 4.26652 14.5402H11.7332C12.6865 14.5402 13.5999 13.7669 13.7599 12.8269L14.6465 7.52023C14.7532 6.86689 14.4199 5.99356 13.9065 5.58023L9.28652 1.88689C8.57318 1.31356 7.41985 1.31356 6.71318 1.88023Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            {/* <p className='text-textsColor-routeText text-nameSize'>{firstLocation}<span className='font-medium text-textsColor-texts'>{secondLocation}</span></p> */}

        </div>
    )
}