import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Quote from './Quote';

import "../../styles/QuoteContainer.css"

const url = 'http://localhost:4000/quotes'

function QuoteContainer(props) {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setQuotes(response.data.quotes);
            }).catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div className='quote-page-container'>
            <h2>My Quotes</h2>
            {quotes.length > 1 ? (
                quotes.map(quote => ( 
                    <Quote key={quote._id} quote={quote} />
                ))
            ) : (
                <h3 className='loading'>Loading...</h3>
            )}
        </div>

    );
}

export default QuoteContainer;