// store.js
import { configureStore } from "@reduxjs/toolkit";
import breadcrumbReducer from "./Slices/breadcrumbSlice";

const store = configureStore({
  reducer: {
    breadcrumb: breadcrumbReducer,
  },
});

export default store;
