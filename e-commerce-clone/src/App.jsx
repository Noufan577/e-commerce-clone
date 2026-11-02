import { Route, Routes } from 'react-router';
import './App.css'
import { HomePage } from './pages/HomePages'
import { CheckoutPage } from './pages/CheckoutPage';
import { Orders } from "./pages/Orders"
import { Tracking } from "./pages/Tracking"
import axios from 'axios';
import { useState, useEffect } from 'react'


function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios.get('/api/cart-items?expand=product')
      .then((response) => {
        setCart(response.data)        
      });
  }, []);



  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage cart={cart} />} />
        <Route path="checkout" element={<CheckoutPage cart={cart} />} />
        <Route path="orders" element={<Orders cart={cart} />} />
        <Route path="tracking" element={<Tracking />} />
      </Routes>
    </div>
  );
}

export default App
