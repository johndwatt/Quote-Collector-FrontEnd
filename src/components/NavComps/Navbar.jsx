import React from 'react';
import { Link } from 'react-router-dom';

import "../../styles/Navbar.css"

function Navbar(props) {
    return (
        <nav className="navbar">
            <h3 className='navbar-home'>Quote Collector</h3>
            <ul className='navbar-items'>
                <Link to='/quotes' className='navbar-item'>My Quotes</Link>
                <Link to='/quotes/new' className='navbar-item'>Add Quote</Link>
            </ul>
        </nav>
    );
}

export default Navbar;