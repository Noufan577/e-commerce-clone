import { useState } from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import { HomePage } from './pages/HomePages'

function App() {

  return (
    <div>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="checkout" element={<div>Test ceckout Page</div>}/>
    </Routes>
  </div>
  );
}

export default App
