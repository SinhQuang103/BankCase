import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const navigate = useNavigate();

    const userBalances = {
        '123': 4000000,
        '456': 300000,
        '789': 9000000
    };

    const handleLogin = (e) => {
        e.preventDefault();

        if (userBalances[username] && password === username) {
            setSuccessMessage('Login Successful');
            setErrorMessage('');
            navigate('/main', { state: { username: username, balance: userBalances[username] } });
        } else {
            setErrorMessage('Login Failed');
            setSuccessMessage('');
        }
    };

    return (
        <div className="container">
            <h2>Đăng Nhập</h2>
            <form onSubmit={handleLogin} className="form">
                <div className="input-container">
                    <label>Tên Đăng Nhập:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter Username" required className="input" />
                </div>
                <div className="input-container">
                    <label>Mật Khẩu:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" required className="input" />
                </div>
                <button type="submit" className="button">Login</button>
            </form>
            {errorMessage && <p className="error">{errorMessage}</p>}
            {successMessage && <p className="success">{successMessage}</p>}

            <button onClick={() => navigate('/register')} className="register-button">
                Quay lại đăng kí
            </button>
        </div>
    );
};

export default Login;
