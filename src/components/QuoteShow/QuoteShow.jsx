import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Quote from '../Quote/Quote';

import "../QuoteContainer/QuoteContainer.css"

// NEED TO FIX URL => how do I get the quotes URL id to send get request to that specific URL? Do I need separate API folder to exact out some of this logic? Consider. 
// Also consider if we need this AT ALL, could just go directly from the quotes page, but then how to access??
const url = 'http://localhost:4000/quotes'

function QuoteShow(props) {
    const [quote, setQuote] = useState({});

    // needs to return the one specific quote that is selected?
    useEffect(() => {
        axios.get(url)
            .then(response => {
                setQuote(response.data.quote);
            }).catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div className='quote-page-container'>
            <h2>{quote.author}</h2>
            {quote.length > 1 ? (
                <Quote key={quote._id} quote={quote} />
            ) : (
                <h3 className='loading'>Loading...</h3>
            )}
        </div>

    );
}

export default QuoteContainer;