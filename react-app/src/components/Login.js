import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Info:', formData);
    // Add your login logic here
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login In</h2>
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <div className="forgot">Forgot Password?</div>

          <button type="submit">Log In</button>
        </form>
        <p className="bottom-text">
          Don't Have an Account? <span>Create Account</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
