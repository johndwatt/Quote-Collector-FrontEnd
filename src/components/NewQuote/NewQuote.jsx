import React, { useState } from 'react';
import axios from 'axios';

import "./NewQuote.css"

const url = 'http://localhost:4000/quotes'

function NewQuote(props) {
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");
    const [tags, setTags] = useState([]);

    const handleChangeContent = (e) => {
        setContent(e.target.value);
    }
    const handleChangeAuthor = (e) => {
        setAuthor(e.target.value);
    }

    const handleChangeTags = (e) => {
        setTags(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const quote = {
            content: content,
            author: author,
            tags: tags,
        }

        axios.post(url, quote)
            .then(response => {
                console.log(response.data);
            }).catch(error => {
                console.log(error);
            });

        window.location = "/quotes";
    }

    return (
        <div className='form-container'>
            <h2>Create New Quote</h2>
            <form onSubmit={handleSubmit} className='form' >
                <div className='input-container'>
                    <label>Quote: </label>
                    <textarea  
                        type='text'
                        required
                        name='content'
                        placeholder='The quote...'
                        className='form-content'
                        value={content}
                        onChange={handleChangeContent}>
                    </textarea>
                </div>
                <div className='input-container'>
                    <label>Author: </label>
                    <input  
                        type='text'
                        name='author'
                        placeholder='Who said the quote...'
                        className='form-author'
                        value={author}
                        onChange={handleChangeAuthor} />
                </div>
                <div className='input-container'>
                    <label>Tags: </label>
                    <input  
                        type='text'
                        name='tags'
                        placeholder='Insightful, Inspirational, etc...'
                        className='form-tags'
                        value={tags}
                        onChange={handleChangeTags} />
                </div>
                <input
                    type='submit'
                    className='form-submit'
                    value='Add Quote'/>
            </form>
        </div>

    );
}

export default NewQuote;