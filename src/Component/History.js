import React from 'react';
import './History.css';

const History = ({ transactions }) => {
    return (
        <div className="history-container">
            <h2>Lịch Sử Giao Dịch</h2>
            {transactions.length === 0 ? (
                <p>Không có lịch sử giao dịch</p>
            ) : (
                <ul>
                    {transactions.map((transaction, index) => (
                        <li key={index}>
                            {transaction.type}: {transaction.amount} VND from {transaction.sender} to {transaction.receiver} on {transaction.date}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default History;
