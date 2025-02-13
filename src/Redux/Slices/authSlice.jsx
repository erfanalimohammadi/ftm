// import { createSlice } from "@reduxjs/toolkit";
// import Cookies from "js-cookie";

// const initialState = {
//   token: Cookies.get("authToken") || null,
//   isAuthenticated: !!Cookies.get("authToken"),
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     loginSuccess: (state, action) => {
//       state.token = action.payload;
//       state.isAuthenticated = true;
//       Cookies.set("authToken", action.payload, { expires: 7, secure: true, sameSite: "Strict" });
//     },
//     logout: (state) => {
//       state.token = null;
//       state.isAuthenticated = false;
//       Cookies.remove("authToken");
//     },
//   },
// });

// export const { loginSuccess, logout } = authSlice.actions;
// export default authSlice.reducer;
