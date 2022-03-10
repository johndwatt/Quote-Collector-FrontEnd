import React, { useState } from 'react';
import auth_service from '../../auth/auth_service';
import { useNavigate } from 'react-router-dom';

import "../../styles/Form.css"

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

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
                email: email,
                password: password,
            }
            await auth_service.login(user)
            .then(() => {
                navigate('/quotes');
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
            <h2>Log in to Your Account</h2>
            {error && <h3 className='error'>{error}</h3>}
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