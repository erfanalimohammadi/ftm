import React from "react";

import FreeShoppingPage from "../Free-Shopping-pege/index-of-page";
import ShoppingPage from "../Shopping-page/index-of-Shopping-page";
import Analisys from "../Analisys-page/index-of-AnalisysPage";
import PaymentPage from "../Payment-Page/index-Of-Payment";
import Accounts2 from "./index-Of-Accounts2";

import { Routes, Route, useParams } from "react-router-dom";

export default function Accounts(){

    const {pages} = useParams()

    return (
        <Routes>
            <Route path="shopping" element={<ShoppingPage />} />
            <Route path="freeshopping" element={<FreeShoppingPage />} />
            <Route path="analysis/:id" element={<Analisys />} />
            <Route path="shoppingPage/payment" element={<PaymentPage />} />
            <Route path="/" element={<Accounts2 />} />
        </Routes>
    )
}