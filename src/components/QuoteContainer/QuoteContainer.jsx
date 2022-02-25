import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import Quote from '../Quote/Quote';

import "./QuoteContainer.css"

const url = 'http://localhost:4000/quotes'

function QuoteContainer(props) {
    const [quotes, setQuotes] = useState([]);



    return (
        <div className='quote-page-container'>
            <Quote />
            <Quote />
            <Quote />
        </div>

    );
}

export default QuoteContainer;