import { useState } from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import { HomePage } from './pages/HomePages'
import { CheckoutPage } from './pages/CheckoutPage';
import {Orders} from "./pages/Orders"
import {Tracking} from "./pages/Tracking"
function App() {

  return (
    <div>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="checkout" element={<CheckoutPage/>}/>
        <Route path="orders" element={<Orders/>}/>
        <Route path="tracking" element={<Tracking/>}/>
    </Routes>
  </div>
  );
}

export default App
