import React from 'react';

import "./Quote.css"

function Quote(props) {
    return (
        <div className="quote">
            <p className="quote-content">{props.quote.content}</p>
            <div className='quote-flex'>
                <p className="quote-author">{props.quote.author}</p>
                <p className="quote-tags">{props.quote.tags}</p>
            </div>
        </div>
    );
}

export default Quote;