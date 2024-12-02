import React, { useState } from 'react';
import Counter from './count';
const Counterclick = (props) => {
    const {count , increaseFunction} = props

    return(
        <div>
            <button
            onClick={increaseFunction}
            className='px-5 py-2 text-[25px] text-black bg-blue-300 border-none outline-none'>
                Number = {count}
            </button>
        </div>
    )
}
export default Counter(Counterclick)