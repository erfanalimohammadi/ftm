import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import reportWebVitals from './reportWebVitals';
import MainApp from './Main';

const root = ReactDOM.createRoot(document.getElementById('root'));
if (!root) {
  throw new Error("Root element not found. Please check your HTML file.");
}
root.render(
    <React.StrictMode>
      <MainApp />
    </React.StrictMode>
);


