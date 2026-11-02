import './header.css'
import { Link } from 'react-router';

export function Header({cart = []}) {
    let  total=0;
    cart.forEach((cartItem)=>{
        total+=cartItem.quantity;
    });
    return (

        <div className="header">
            <div className="left-section">
                <Link to="/" className="header-link logo-link">
                    <svg className="logo-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="26" height="26">
                        <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM5.17 5H2V3H0v2h2l3.6 7.59L4.25 15c-.16.28-.25.61-.25.95A2 2 0 0 0 6 18h14v-2H6.42c-.14 0-.25-.11-.25-.25l.03-.12L7.1 14h9.45a2 2 0 0 0 1.75-1.03l3.58-6.49A1 1 0 0 0 21 5H5.17z"/>
                    </svg>
                    <span className="logo-text">Ecommerce app</span>
                </Link>
            </div>

            <div className="middle-section">
                <input className="search-bar" type="text" placeholder="Search" />

                <button className="search-button">
                    <img className="search-icon" src="images/icons/search-icon.png" />
                </button>
            </div>

            <div className="right-section">
                <Link className="orders-link header-link" to="/orders">

                    <span className="orders-text">Orders</span>
                </Link>

                <Link className="cart-link header-link" to="/checkout">
                    <img className="cart-icon" src="images/icons/cart-icon.png" />
                    <div className="cart-quantity">{total}</div>
                    <div className="cart-text">Cart</div>
                </Link>
            </div>
        </div>
    );
}
