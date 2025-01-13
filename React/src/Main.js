import React from 'react';
import './index.css';
import FreeShoppingPage from './Free-Shopping-pege/index-of-page';
import ShoppingPage from './Shopping-page/index-of-Shopping-page'
import Homepage from './Main-page-or-Home/index-of-Main';
import Analisys from './Analisys-page/index-of-AnalisysPage';
import PaymentPage from './Payment-Page/componets/index-Of-Payment';
import { BrowserRouter , Routes , Route } from 'react-router-dom';


export default function MainApp(){
    //این صفحه هنوز تکمبل نشده و عمل روتینگ هنوز اعمال نشده جهت اضافه کردن صفحه جدید کامپونتت قبلی را کامنت کنید 
    return(
        <BrowserRouter>
            <div className=' overflow-style bg-componentBg-primeryBg min-h-screen box-border m-0 p-0'>
                <Routes>
                    <Route path='/' element={<Homepage/>} />
                    <Route path='/shoppinge' element={<ShoppingPage/>} />
                    <Route path='/shopping/free' element={<FreeShoppingPage/>} />
                    <Route path='/analisys' element={<Analisys/>} />
                    <Route path='/payment' element={<PaymentPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}