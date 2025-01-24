// breadcrumbSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basePath: "Trader / AccountOverview",
    routes: [
        { path: "anliays/:id", name: "Account Matrix", address: "Analisys" },
        { path: "shopping", name: "Start FTMO Challenge", address: "ShoppingPage" },
        { path: "freeshopping", name: "Free Trial", address: "FreeShoppingPage" },
        { path: "shopping/payment", name: "Order", address: "PaymentPage" }, 
      ],
    currentPath: "",
  };
  

const breadcrumbSlice = createSlice({
  name: "breadcrumb",
  initialState,
  reducers: {
    setCurrentPath: (state, action) => {
      state.currentPath = action.payload;
    },
  },
});

export const { setCurrentPath } = breadcrumbSlice.actions;
export default breadcrumbSlice.reducer;
