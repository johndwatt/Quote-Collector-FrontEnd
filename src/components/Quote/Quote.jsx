import React from 'react';

import "./Quote.css"

function Quote(props) {
    return (
        <div className="quote">
            <p className="quote-content">Some content: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod possimus vitae totam voluptatibus incidunt pariatur illo, cupiditate minima odit voluptate placeat, vero alias dignissimos at. Ut necessitatibus qui recusandae culpa?</p>
            <div className='quote-flex'>
                <p className="quote-author">Author</p>
                <p className="quote-tags">Tags</p>
            </div>
        </div>
    );
}

export default Quote;