import React, { useState } from 'react';
import auth_service from '../../auth/auth_service';
import { useNavigate } from 'react-router-dom';

import "../../styles/Form.css"

function Signup(props) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleChangeUsername = (e) => {
        setUsername(e.target.value);
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const user = {
                username: username,
                email: email,
                password: password,
            }

            await auth_service.signup(user)
            .then(() => {
                navigate('/login');
            }).catch(error => {
                console.log(error);
                setError(error.message);
            })

        } catch (error) {
            console.log(error);
            setError(error.message);
        }
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