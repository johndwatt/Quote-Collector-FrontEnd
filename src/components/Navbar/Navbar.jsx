import React from 'react';

import "./Navbar.css"

function Navbar(props) {
    return (
        <nav className="navbar">
            <h3 className='navbar-home'>Quote Collector</h3>
            <ul className='navbar-items'>
                <a href="#" className='navbar-item'><li>Page 1</li></a>
                <a href="#" className='navbar-item'><li>Page 2</li></a>
                <a href="#" className='navbar-item'><li>Page 3</li></a>
                <a href="#" className='navbar-item'><li>Page 4</li></a>
            </ul>
        </nav>
    );
}

export default Navbar;