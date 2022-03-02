import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Quote from './Quote';

import "../../styles/Form.css"
import "../../styles/Quote.css"

const url = 'http://localhost:4000/quotes'

function DeleteQuote(props) {
    const { id } = useParams();
    const [quote, setQuote] = useState({});

    const idUrl = url + "/" + id;

    useEffect(() => {
        axios.get(idUrl)
            .then(response => {
                setQuote(response.data.quote);
            }).catch(error => {
                console.log(error);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.delete(idUrl)
            .then(response => {
                console.log(response.data);
            }).catch(error => {
                console.log(error);
            });

        window.location = "/quotes";
    }

    return (
        <div className='delete-container'>
            <h2>Are you sure you want to delete this quote?</h2>
            <div className="quote">
                <p className="quote-content">{quote.content}</p>
                <div className='quote-flex'>
                    <p className="quote-author">{quote.author}</p>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type='submit'
                    className='delete-submit'
                    value='Delete Quote'/>
                <Link to="/quotes" className='delete-cancel'>Cancel</Link>
            </form>
            
        </div>

    );
}

export default DeleteQuote;