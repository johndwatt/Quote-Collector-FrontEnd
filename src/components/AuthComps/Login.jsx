import React, { useState } from 'react';
import axios from 'axios';

import "../../styles/Form.css"

const url = 'http://localhost:4000/login'

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const user = {
            email: email,
            password: password,
        }

        axios.post(url, user)
            .then(response => {
                console.log(response.data);
            }).catch(error => {
                console.log(error);
            });

        window.location = "/quotes";
    }

    return (
        <div className='form-container'>
            <h2>Log in to Your Account</h2>
            <form onSubmit={handleSubmit} className='form' >
                <div className='input-container'>
                    <label>Email:</label>
                    <input  
                        type='email'
                        required
                        name='email'
                        placeholder='your-email@email.com'
                        className='form-author'
                        value={email}
                        onChange={handleChangeEmail} />
                </div>
                <div className='input-container'>
                    <label>Password:</label>
                    <input  
                        type='password'
                        required
                        name='password'
                        placeholder='*****************'
                        className='form-tags'
                        value={password}
                        onChange={handleChangePassword} />
                </div>
                <input
                    type='submit'
                    className='form-submit'
                    value='Log In'/>
            </form>
        </div>

    );
}

export default Login;