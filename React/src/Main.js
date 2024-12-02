import React from 'react';
import './index.css';
import Countermouse from './Fils/musecount';
import Clickcount from './Fils/clickcount';
import Reducercunter from './useReducer/Reducer';


export default function Mainpeg(){
    return(
        <div>
            <Reducercunter/>
        </div>
    )
}