import React, { useReducer, useState } from 'react';

const init = {
    value1 : 0,
    value2 : 5
}
const reducer = (state , action) => {
    switch (action.type) {
        case "incrace" :
            return {...state , value1: state.value1 + action.val1 ,
                value2 : state.value2 + action.val2
            }
            
        case "disincrace":
            return {...state , value1: state.value1 - action.val1 ,
                value2 : state.value2 - action.val2
            }
        case "rest" :
            return init
        default:
           
    }
}
const Reducercunter = () => {
    const [count , dispath] = useReducer(reducer , init)
    return(
        <div className='flex flex-row justify-around items-center w-full p-2'>
            <h2 className='text-[22px] text-blue-500 font-bold'> value 1 : {count.value1}</h2>
            <h2 className='text-[22px] text-blue-500 font-bold'> value 2 : {count.value2}</h2>

            <button onClick={()=> dispath({type : "incrace" , val1 : 2 , val2: 5})} 
            className="px-5 py-2 text-[20px] text-white bg-black border-none outline-none">افزایش</button>

            <button onClick={()=> dispath({type : "disincrace" , val1 : 1 , val2: 5})} 
            className="px-5 py-2 text-[20px] text-white bg-black border-none outline-none">کاهش</button>

            <button onClick={()=> dispath({type : "rest"})} 
            className="px-5 py-2 text-[20px] text-white bg-black border-none outline-none">بازگشت</button>

        </div>
    )
}
export default Reducercunter