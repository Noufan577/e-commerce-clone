import { useState } from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import { HomePage } from './pages/HomePages'
import { CheckoutPage } from './pages/CheckoutPage';

function App() {

  return (
    <div>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="checkout" element={<CheckoutPage/>}/>
    </Routes>
  </div>
  );
}

export default App
