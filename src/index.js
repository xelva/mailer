import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import 'materialize-css/dist/css/materialize.min.css';
import reduxThunk from 'redux-thunk';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


import App from './components/App'
import reducers from './reducers';
import Surveys from './components/Surveys';
import SurveyNew from './components/SurveyNew';
import Landing from './components/Landing';
import Payments from './components/Payments';



const store = createStore(reducers, {}, applyMiddleware(reduxThunk))
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY)

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    <Provider store={store}>
            <BrowserRouter>
                <Elements stripe={stripePromise}>
                    <Routes>
                        <Route path="/" element={<App />}>
                            <Route index element={<Landing />} />
                            <Route path="/surveys" element={<Surveys />} />
                            <Route path="/surveys/new" element={<SurveyNew />} />                </Route>
                            <Route path="/payments" element={<Payments />} />
                    </Routes>
                </Elements>
            </BrowserRouter>
    </Provider>
);
