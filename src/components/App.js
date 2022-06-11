import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';
import Header from './Header';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51L9DUDEIwvXoAgPncCCQoMOoLS4X5vMzhERCc4zibrhhbaijdiIdZQnV4hIKHYlkwdgqyjyvccVKOjYUfJYqixZH00MDN2Ji96')


const App = ({ fetchUser }) => {
    useEffect(() => {
        fetchUser()
    }, [])


    return (
        <div className="container">
            <Elements stripe={stripePromise}>
                <div>
                    <Header />
                </div>
                <div>
                    <Outlet />
                </div>
            </Elements>
        </div>
        
    )
}

export default connect(null, { fetchUser })(App);