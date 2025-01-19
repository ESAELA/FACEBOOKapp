import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PasswordRecovery from "./componentes/PasswordRecovery.jsx"
import RegisterAccount from "./componentes/RegisterAccount.jsx"
import NewPage from "./componentes/NewPage.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/passwordrecovery" element={<PasswordRecovery/>}/>
      <Route path="/registeraccount" element={<RegisterAccount/>}/>
      <Route path="/newpage" element={<NewPage/>}/>
    </Routes>
  </BrowserRouter>,
)
