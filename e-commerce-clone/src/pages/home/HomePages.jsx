import './HomePage.css'
import { Header } from '../../components/Header'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { ProductGrid } from './ProductGrid'


export function HomePage({cart,loadCart}) {

    const [products,setProducts]=useState([]);
    useEffect(() => {
        axios.get('/api/products')
            .then((response) => {
                setProducts(response.data)
            });

    },[]);

    return (
        <>
            <title>NexShop — Premium Store</title>

            <Header cart={cart}/>
            <div className="home-page">
                <div className="home-hero">
                    <h1>Shop the Future,<br/>Delivered Today</h1>
                    <p>Thousands of premium products at unbeatable prices.</p>
                </div>
                <ProductGrid products={products} loadCart={loadCart}/>
            </div>
        </>
    );
}
