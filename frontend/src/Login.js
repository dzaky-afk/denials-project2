import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login({ loginHandler }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      setLoginSuccess(true);
      setTimeout(() => {
        loginHandler(); // Update the login status in App
        setLoginSuccess(false); // Reset success message after animation
        navigate('/'); // Redirect to Beranda after successful login
      }, 1500); // Show success animation for 1.5 seconds
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              placeholder="Username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              className="input-field"
            />
          </div>
          <div className="form-group">
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="input-field"
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>

        {loginSuccess && (
          <div className="login-success">
            <span>Login Sukses!</span>
          </div>
        )}

        <div className="signup-link">
          <p>Belum punya akun? <a href="/signup">Daftar di sini</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
