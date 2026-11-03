import './checkout-header.css';
import './CheckoutPage.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { OrderSummary } from './OrderSummary';
import { PaymentSummary } from './PaymentSummary';

export function CheckoutPage({ cart, loadCart }) {
    const [deliverOptions, setDeliveryOptions] = useState([]);
    const [paymentSummary, setpaymentSummary] = useState(null);

    useEffect(() => {
        axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
            .then((response) => {
                setDeliveryOptions(response.data);
            });
        axios.get('/api/payment-summary')
            .then((response) => {
                setpaymentSummary(response.data);
            });
    }, [cart]);

    return (
        <>
            <title>Checkout — NexShop</title>

            <div className="checkout-header">
                <div className="header-content">
                    <div className="checkout-header-left-section">
                        <a href="/" className="checkout-logo-link">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#10b981" width="24" height="24">
                                <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM5.17 5H2V3H0v2h2l3.6 7.59L4.25 15c-.16.28-.25.61-.25.95A2 2 0 0 0 6 18h14v-2H6.42c-.14 0-.25-.11-.25-.25l.03-.12L7.1 14h9.45a2 2 0 0 0 1.75-1.03l3.58-6.49A1 1 0 0 0 21 5H5.17z"/>
                            </svg>
                            <span>NexShop</span>
                        </a>
                    </div>

                    <div className="checkout-header-middle-section">
                        Checkout (<a className="return-to-home-link"
                            href="/">{paymentSummary ? `${paymentSummary.totalItems} items` : 'items'}</a>)
                    </div>

                    <div className="checkout-header-right-section">
                        <img src="images/icons/checkout-lock-icon.png" />
                    </div>
                </div>
            </div>

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <OrderSummary cart={cart} deliverOptions={deliverOptions} loadCart={loadCart} />
                    <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
                </div>
            </div>
        </>
    );
}
