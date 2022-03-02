import React from 'react';
import { Link } from 'react-router-dom';

import "../../styles/Quote.css"

function Quote(props) {
    return (
        <div className="quote">
            <p className="quote-content">{props.quote.content}</p>
            <div className='quote-flex'>
                <p className="quote-author">{props.quote.author}</p>
                <div className="quote-buttons">
                    <Link to={{pathname: `/quotes/${props.quote._id}/edit`}}>Edit</Link> 
                    <Link to={{pathname: `/quotes/${props.quote._id}/delete`}}>Delete</Link>
                </div>
            </div>
        </div>
    );
}

export default Quote;