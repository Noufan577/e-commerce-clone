import { Route, Routes } from 'react-router';
import './App.css'
import { HomePage } from './pages/home/HomePages'
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { Orders } from "./pages/Orders"
import { Tracking } from "./pages/Tracking"
import axios from 'axios';
import { useState, useEffect } from 'react'

function App() {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    const response = await axios.get('/api/cart-items?expand=product');
    setCart(response.data);
  }

  useEffect(() => {
    axios.get('/api/cart-items?expand=product').then((response) => {
      setCart(response.data);
    });
  }, []);


  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage cart={cart} loadCart={loadCart}/>} />
        <Route path="checkout" element={<CheckoutPage cart={cart} loadCart={loadCart} />} />
        <Route path="orders" element={<Orders cart={cart} />} />
        <Route path="tracking" element={<Tracking />} />
      </Routes>
    </div>
  );
}

export default App
