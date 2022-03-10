import React from 'react';
import { Link } from 'react-router-dom';
import auth_service from '../../auth/auth_service';

import "../../styles/Navbar.css"

function Navbar(props) {
    const currentUser = props.user;
    
    const handleLogout = function (){
        auth_service.logout();
    }

    return (
        <nav className="navbar">
            <Link to='/' className='navbar-home'>Quote Collector</Link>        
            {currentUser ? (
                <ul className='navbar-items'>
                    <Link to='/quotes' className='navbar-item'>My Quotes</Link>
                    <Link to='/quotes/new' className='navbar-item'>Add Quote</Link>
                    <a href="/login" className='navbar-item' onClick={handleLogout}>Logout</a>
                </ul>
            ) : (
                <ul className='navbar-items'>
                    <Link to='/login' className='navbar-item'>Login</Link>
                    <Link to='/signup' className='navbar-item'>Signup</Link>
                </ul>
            )}                    
        </nav>
    );
}

export default Navbar;