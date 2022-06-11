import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';
import Header from './Header';

const App = ({ fetchUser }) => {
    useEffect(() => {
        fetchUser()
    }, [])


    return (
        <div className="container">
            
                <div>
                    <Header />
                </div>
                <div>
                    <Outlet />
                </div>
                lalala
            
        </div>
        
    )
}

export default connect(null, { fetchUser })(App);