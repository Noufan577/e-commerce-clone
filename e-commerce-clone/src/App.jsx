import { useState } from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import { HomePage } from './pages/HomePages'
import { CheckoutPage } from './pages/CheckoutPage';
import {Orders} from "./pages/Orders"
function App() {

  return (
    <div>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="checkout" element={<CheckoutPage/>}/>
        <Route path="orders" element={<Orders/>}/>
    </Routes>
  </div>
  );
}

export default App
