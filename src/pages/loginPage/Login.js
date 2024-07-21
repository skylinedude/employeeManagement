import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './loginStye.css'; 

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/users/login', { username, password });
            localStorage.setItem('token', response.data.token);
            navigate('/dashboard');
        } catch (error) {
            alert('Invalid login details');
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h1 className="login-header">Login</h1>
                <form className="login-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        className="login-input"
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="login-input"
                        required
                    />
                    <button type="submit" className="login-button">Log In</button>
                </form>
                {/* <div className="login-footer">
                    <a href="/" className="login-link">Forgotten password?</a>
                    <a href="/" className="login-link">Create new account</a>
                </div> */}
            </div>
        </div>
    );
};

export default Login;
