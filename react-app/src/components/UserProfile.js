import React, { useState } from 'react';
import '../index.css';  // ✅ Correct


function Userprofile() {
  const [editable, setEditable] = useState(false);
  const [user, setUser] = useState({
    username: 'Jemima',
    email: 'abc@gmail.com',
    phone: '018XXXXXXXX',
    address: 'Dhaka',
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
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

      <div className="profile-box">
        <h3 className="profile-title">User</h3>
        <div className="profile-content">
          <div className="info">
            <label>Username</label>
            <input name="username" value={user.username} onChange={handleChange} disabled={!editable} />

            <label>Email Id</label>
            <input name="email" value={user.email} onChange={handleChange} disabled={!editable} />

            <label>Phone</label>
            <input name="phone" value={user.phone} onChange={handleChange} disabled={!editable} />

            <label>Address</label>
            <input name="address" value={user.address} onChange={handleChange} disabled={!editable} />
          </div>

          <div className="image-box">🖼️</div>
        </div>

        <div className="button-group">
          <button onClick={() => setEditable(true)}>Edit</button>
          <button onClick={() => setEditable(false)}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default Userprofile;
