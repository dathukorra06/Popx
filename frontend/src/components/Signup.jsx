import React, { useState } from 'react';

export default function Signup({ setScreen, userData, setUserData }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: 'yes' // defaults to 'yes'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRadioChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      isAgency: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.email || !formData.password) {
      alert('Please fill out all required fields.');
      return;
    }
    
    // Save to global user profile state
    setUserData({
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      company: formData.companyName || 'Not Specified',
      isAgency: formData.isAgency === 'yes' ? 'Yes' : 'No'
    });

    setScreen('profile');
  };

  return (
    <div className="screen-wrapper form-screen" style={{ justifyContent: 'space-between', minHeight: '100%' }}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', flex: 1 }}>
        <div>
          <button className="back-btn" onClick={() => setScreen('welcome')}>
            <svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
            Back
          </button>
          <div className="form-header animate-delay-1" style={{ marginBottom: '24px' }}>
            <h2 className="form-title">Create your<br />PopX account</h2>
          </div>

          <form onSubmit={handleSubmit} id="signup-form" className="animate-delay-2" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="input-group">
              <span className="input-label">Full Name<span className="required-star">*</span></span>
              <input
                type="text"
                name="fullName"
                className="input-field"
                placeholder="Enter full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <span className="input-label">Phone number<span className="required-star">*</span></span>
              <input
                type="tel"
                name="phone"
                className="input-field"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <span className="input-label">Email address<span className="required-star">*</span></span>
              <input
                type="email"
                name="email"
                className="input-field"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <span className="input-label">Password<span className="required-star">*</span></span>
              <input
                type="password"
                name="password"
                className="input-field"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <span className="input-label">Company name</span>
              <input
                type="text"
                name="companyName"
                className="input-field"
                placeholder="Enter company name"
                value={formData.companyName}
                onChange={handleChange}
              />
            </div>

            <div className="radio-section">
              <span className="radio-label">Are you an Agency?<span className="required-star">*</span></span>
              <div className="radio-options">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="isAgency"
                    value="yes"
                    checked={formData.isAgency === 'yes'}
                    onChange={() => handleRadioChange('yes')}
                  />
                  <span className="radio-circle"></span>
                  Yes
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="isAgency"
                    value="no"
                    checked={formData.isAgency === 'no'}
                    onChange={() => handleRadioChange('no')}
                  />
                  <span className="radio-circle"></span>
                  No
                </label>
              </div>
            </div>
          </form>
        </div>

        <button
          type="submit"
          form="signup-form"
          className="btn-primary"
          style={{ marginTop: '30px' }}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}
