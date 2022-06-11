import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Header.css';
import Payments from './Payments';

const Header = ({ auth }) => {
    const renderContent = () => {
        switch (auth) {
            case null:
                return;
            case false:
                return (
                    <li><a href="/auth/google">Login With Google</a></li>
                )
            default: 
                return <div>
                            <li><Payments /></li>
                            <li><a href="/api/logout">Lougout</a></li>
                    
                        </div>
                
        }
    }

    return (
       <div>
           <nav>
               <div className="nav-wrapper">
                   <div className="left brand-logo">
                        <Link 
                        to={auth ? '/surveys' : '/'}>
                            mailer
                        </Link>
                   </div>
                   <ul className="right">
                        {renderContent()}
                   </ul>
               </div>
           </nav>
       </div> 
    )
}

const mapStateToProps = state => {
    return { auth: state.auth }
}

export default connect(mapStateToProps)(Header);