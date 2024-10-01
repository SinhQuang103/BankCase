// src/Component/Transit.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Transit.css';

const Transit = ({ transactions, setTransactions }) => {
    const location = useLocation();
    const { username = 'Guest', balance = 0, userBalances = { '123': 0, '456': 0, '789': 0 } } = location.state || {};

    const [receiverId, setReceiverId] = useState('');
    const [amount, setAmount] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const navigate = useNavigate();

    const handleTransit = (e) => {
        e.preventDefault();

        const validAccounts = ['123', '456', '789'];

        if (!validAccounts.includes(receiverId)) {
            setErrorMessage('Invalid receiver account');
            setSuccessMessage('');
            return;
        }

        if (receiverId === username) {
            setErrorMessage('You cannot transfer money to yourself');
            setSuccessMessage('');
            return;
        }

        const transferAmount = parseInt(amount);
        if (transferAmount > balance) {
            setErrorMessage('Insufficient balance');
            setSuccessMessage('');
            return;
        }

        const updatedUserBalances = { ...userBalances };

        updatedUserBalances[receiverId] = (updatedUserBalances[receiverId] || 0) + transferAmount;
        updatedUserBalances[username] = balance - transferAmount;

        const newTransaction = {
            type: 'Transfer',
            amount: transferAmount,
            sender: username,
            receiver: receiverId,
            date: new Date().toLocaleString(),
        };

        setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);

        setSuccessMessage(`Successfully transferred ${amount} VND to account ${receiverId}`);
        setErrorMessage('');

        setTimeout(() => {
            navigate('/main', { state: { username, balance: updatedUserBalances[username], userBalances: updatedUserBalances } });
        }, 2000);
    };

    return (
        <div className="main-container">
            <h2>Chuyển Tiền</h2>
            <form onSubmit={handleTransit}>
                <div className="input-container">
                    <label>Receiver Account ID:</label>
                    <input type="text" value={receiverId} onChange={(e) => setReceiverId(e.target.value)} required/>
                </div>
                <div className="input-container">
                    <label>Số Tiền Chuyển:</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required/>
                </div>
                <button type="submit" className="transit-button">Submit</button>
            </form>
            {errorMessage && <p className="error">{errorMessage}</p>}
            {successMessage && <p className="success">{successMessage}</p>}
        </div>
    );
};

export default Transit;
