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
            <title>ECommerce Project</title>

            <Header cart={cart}/>
            <div className="home-page">
                <ProductGrid products={products} loadCart={loadCart}/>
            </div>
        </>
    );
}