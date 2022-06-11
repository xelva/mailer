import React from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';

const Payments = () => {
    const elements = useElements();
    const stripe = useStripe();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const {data: clientSecret } = await axios.post('/api/payment_intents', {
            amount: 500
        })       
        console.log(clientSecret) 
  
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button>Pay</button>

        </form>
    )
}

export default Payments;