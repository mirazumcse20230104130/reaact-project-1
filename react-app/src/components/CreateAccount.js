import React, { useState } from 'react';
import './CreateAccount.css';

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    state: '',
    district: '',
    pincode: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="create-account-container">
      <header>
        <h1>Annodaan</h1>
        <nav>
          <a href="/">Home</a> | <a href="/latest">Latest</a> | <a href="/about">About Us</a>
        </nav>
      </header>
      <div className="form-container">
        <h2>Create Account</h2>
        <p>Enter Following Details To Create Account</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Email" required />
          </div>
          <div className="form-group">
            <label>Username</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Enter Username" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter Password" required />
          </div>
          <div className="form-group">
            <label>State</label>
            <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="Enter State" required />
          </div>
          <div className="form-group">
            <label>District</label>
            <input type="text" name="district" value={formData.district} onChange={handleChange} placeholder="Enter District" required />
          </div>
          <div className="form-group">
            <label>Pincode</label>
            <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} placeholder="Enter Pincode" required />
          </div>
          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;