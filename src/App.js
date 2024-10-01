// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Component/Login";
import Register from "./Component/Register";
import MainScreen from "./Component/MainScreen";
import Transit from "./Component/Transit";
import History from "./Component/History";

function App() {
    const [transactions, setTransactions] = useState([
        { type: 'Transfer', amount: 1000, sender: '123', receiver: '456', date: '2024-10-01 12:00' },
        { type: 'Transfer', amount: 500, sender: '456', receiver: '789', date: '2024-10-02 15:30' },
        { type: 'Transfer', amount: 2000, sender: '123', receiver: '789', date: '2024-10-03 09:45' },
    ]);

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/main" element={<MainScreen />} />
                <Route path="/transit" element={<Transit transactions={transactions} setTransactions={setTransactions} />} />
                <Route path="/history" element={<History transactions={transactions} />} />
            </Routes>
        </Router>
    );
}

export default App;
