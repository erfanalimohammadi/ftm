// import React, { useEffect } from "react";
// import "./index.css";

// // درحال اعمال چندین تغییرات در روتینگ هستم و ممکنه هنوز صفحه بندی ها به درستی کار نکنن و صفحات نمایش داده نشن...

// import Homepage from "./Main-page-or-Home/index-of-Main";
// import NotFound from "./NotFound/NotFound";

// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// import { Provider, useDispatch } from "react-redux";
// import store from "./Redux/store";
// import { setPreviousLocation } from "./Redux/store";
// import Account from "./Analisys-page/componets/Account";

// function App() {
//   const location = useLocation();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const currentLocation = location.pathname;
//     dispatch(setPreviousLocation(currentLocation));
//     return () => {
//       dispatch(setPreviousLocation(currentLocation));
//     };
//   }, [location, dispatch]);

//   return (
//     <div className="overflow-style bg-componentBg-primeryBg min-h-screen box-border m-0 p-0">
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/trader/accountoverview/*" element={<Account/>} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </div>
//   );
// }
// // درحال اعمال چندین تغییرات در روتینگ هستم و ممکنه هنوز صفحه بندی ها به درستی کار نکنن و صفحات نمایش داده نشن...
// export default function MainApp() {
//   return (
//     <Provider store={store}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </Provider>
//   );
// }
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from './Accounts-Page/index-Of-Account'
import Homepage from "./Main-page-or-Home/index-of-Main";
import NotFound from "./NotFound/NotFound";
import LogIn from "./signUp-signIn-pages/sign-in";
import store from "./Redux/store";
import { Provider } from "react-redux";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/trader/accountoverview/*" element={<Account/>} />
          <Route path="/users/login" element={<LogIn/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
