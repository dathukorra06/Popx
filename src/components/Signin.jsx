import React, { useState } from 'react';

export default function Signin({ setScreen, userData, setUserData }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Please fill out all fields.');
      return;
    }
    // Update local data with the typed email (to show on profile screen)
    setUserData({
      ...userData,
      email: email
    });
    setScreen('profile');
  };

  const isFormValid = email.trim() !== '' && password.trim() !== '';

  return (
    <div className="screen-wrapper form-screen">
      <div>
        <div className="form-header">
          <h2 className="form-title">Signin to your<br />PopX account</h2>
          <p className="form-desc">
            Lorem ipsum dolor sit amet,<br />
            consectetur adipiscing elit,
          </p>
        </div>

        <form onSubmit={handleSubmit} className="form-fields">
          <div className="input-group">
            <span className="input-label">Email Address</span>
            <input
              type="email"
              className="input-field"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <span className="input-label">Password</span>
            <input
              type="password"
              className="input-field"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn-primary"
            style={{ 
              backgroundColor: isFormValid ? 'var(--primary-purple)' : '#CBCBCB', 
              color: '#FFF',
              marginTop: '10px'
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
