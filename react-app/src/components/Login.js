import React, { useState } from 'react';
import '../index.css';  // Correct path (go up one level to src)


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div className="container">
      <header className="header">
        <h2>Annodaan</h2>
        <p>From surplus to support!</p>
      </header>

      <nav className="navbar">
        <div className="nav-links">
          <span>Home</span>
          <span>Lastest</span>
          <span>About Us</span>
        </div>
        <div className="icon">👤</div>
      </nav>

      <div className="login-box">
        <h3 className="login-title">Login In</h3>
        <form onSubmit={handleLogin}>
          <label>Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter Username" required />

          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" required />

          <p className="forgot">Forgot Password?</p>

          <button type="submit">Log In</button>
        </form>
        <p className="create-account">Don't Have a Account? Create Account</p>
      </div>
    </div>
  );
}

export default Login;
