import React from 'react';
import './index.css';
import FreeShoppingPage from './Free-Shopping-pege/index-of-page';
import ShoppingPage from './Shopping-page/index-of-Shopping-page'


export default function MainApp(){
    //این صفحه هنوز تکمبل نشده و عمل روتینگ هنوز اعمال نشده جهت اضافه کردن صفحه جدید کامپونتت قبلی را کامنت کنید 
    return(
        <div className='bg-blue-400 min-h-screen box-border m-0 p-0'>
            <ShoppingPage/>
            {/* <FreeShoppingPage/> */}
        </div>
    )
}