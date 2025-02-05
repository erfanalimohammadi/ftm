// store.js
import { configureStore } from "@reduxjs/toolkit";
import breadcrumbReducer from "./Slices/breadcrumbSlice";
import authReducer from './Slices/authSlice'

const store = configureStore({
  reducer: {
    breadcrumb: breadcrumbReducer,
    auth : authReducer
  },
});

export default store;
