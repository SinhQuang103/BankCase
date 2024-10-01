import React, {useState} from "react";
import './Register.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword]  = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();

        if (!username || !password || !confirmPassword || !email ) {
            setErrorMessage('Dien not di ban oi')
            setSuccessMessage('')
        } else if (password !== confirmPassword) {
            setErrorMessage('Khong khop')
            setSuccessMessage('')
        }
        else {
            setSuccessMessage("Thanh")
            setErrorMessage('')
        }
    };

    return (
        <div className="register-container">
            <h2>Đăng kí</h2>
            <form onSubmit={handleRegister} className="register-form">
                <div className="input-container">
                    <label>Tên người dùng: </label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter Username" required/>
                </div>
                <div className="input-container">
                    <label>Mật Khẩu: </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" required/>
                </div>
                <div className="input-container">
                    <label>Nhập lại mật khẩu: </label>
                    <input type="password" value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)} placeholder="Confirm Password" required/>
                </div>
                <div className="input-container">
                    <label>Email: </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" required/>
                </div>
                <button type="submit" className="register-button">Register</button>
            </form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {successMessage && <p className="success-message">{successMessage}</p> }
        </div>
    )
}

export default Register