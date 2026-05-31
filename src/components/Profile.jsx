import React from 'react';
import marryDoeImg from '../assets/marry_doe.png';

export default function Profile({ setScreen, userData, resetUserData }) {
  const handleLogout = () => {
    resetUserData();
    setScreen('welcome');
  };

  return (
    <div className="screen-wrapper profile-screen">
      {/* Header bar */}
      <div className="profile-header">
        <h2>Account Settings</h2>
      </div>

      <div className="profile-content">
        {/* User Card */}
        <div className="profile-card">
          <div className="profile-user-info">
            <div className="profile-avatar-container">
              <img 
                src={marryDoeImg} 
                alt="Marry Doe" 
                className="profile-avatar" 
              />
              <div className="profile-camera-badge" title="Change Avatar">
                <svg viewBox="0 0 24 24">
                  <path d="M4 4h3l2-2h6l2 2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm8 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                </svg>
              </div>
            </div>
            
            <div className="profile-details">
              <div className="profile-name">{userData.name}</div>
              <div className="profile-email">{userData.email}</div>
            </div>
          </div>

          <p className="profile-desc">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam 
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>

        {/* Separator line as shown in mockup */}
        <div className="profile-separator"></div>

        {/* Dynamic Details Canvas */}
        <div className="profile-bottom-canvas">
          <div className="profile-meta-list">
            <div className="profile-meta-item">
              <span className="profile-meta-label">Phone</span>
              <span className="profile-meta-value">{userData.phone}</span>
            </div>
            <div className="profile-meta-item">
              <span className="profile-meta-label">Company</span>
              <span className="profile-meta-value">{userData.company}</span>
            </div>
            <div className="profile-meta-item">
              <span className="profile-meta-label">Agency Status</span>
              <span className="profile-meta-value">{userData.isAgency}</span>
            </div>
          </div>

          <button className="profile-logout-btn" onClick={handleLogout}>
            Logout Account
          </button>
        </div>
      </div>
    </div>
  );
}
