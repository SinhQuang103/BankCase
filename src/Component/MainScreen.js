// src/Component/MainScreen.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './MainScreen.css';

const MainScreen = () => {
    const location = useLocation();
    const { username = 'Guest', balance = 0 } = location.state || {};
    const navigate = useNavigate();

    const handleTransitClick = () => {
        navigate('/transit', { state: { username, balance } });
    };

    const handleHistoryClick = () => {
        navigate('/history');
    };

    return (
        <div className="main-screen">
            <h1>Xin Chào, {username}</h1>
            <p>Số Dư: {balance} VND</p>
            <div className="button-container">
                <button onClick={handleTransitClick}>Transit Money</button>
                <button onClick={handleHistoryClick}>View History</button>
            </div>
        </div>
    );
};

export default MainScreen;
