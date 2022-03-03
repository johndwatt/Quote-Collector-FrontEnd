import React, { useState } from 'react';
import axios from 'axios';

import "../../styles/Form.css"

const url = 'http://localhost:4000/signup'

function Signup(props) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleChangeUsername = (e) => {
        setUsername(e.target.value);
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const user = {
            username: username,
            email: email,
            password: password,
        }

        axios.post(url, user)
            .then(response => {
                console.log(response.data);     
                window.location = "/quotes";
            }).catch(error => {
                setError(error.message);
                console.log(error);
            });

   
    }

    return (
        <div className='form-container'>
            <h2>Create a New Account</h2>
            {error && <h3 className='error'>{error}</h3>}
            <form onSubmit={handleSubmit} className='form' >
                <div className='input-container'>
                    <label>Username:</label>
                    <input 
                        type='text'
                        required
                        name='username'
                        placeholder='Username123'
                        className='form-content'
                        value={username}
                        onChange={handleChangeUsername}>
                    </input>
                </div>
                <div className='input-container'>
                    <label>Email:</label>
                    <input  
                        type='email'
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
                        name='password'
                        placeholder='*****************'
                        className='form-tags'
                        value={password}
                        onChange={handleChangePassword} />
                </div>
                <input
                    type='submit'
                    className='form-submit'
                    value='Create Account'/>
            </form>
        </div>

    );
}

export default Signup;