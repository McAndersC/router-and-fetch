import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './js/core/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import config from './js/core/misc/configuaration.js';


console.log(config.development)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={config.development ? '/' : '/smuknu'}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
