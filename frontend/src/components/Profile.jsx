import React, { useRef } from 'react';
import marryDoeImg from '../assets/marry_doe.png';

export default function Profile({ setScreen, userData, setUserData, resetUserData }) {
  const fileInputRef = useRef(null);

  const handleLogout = () => {
    resetUserData();
    setScreen('welcome');
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData(prev => ({
          ...prev,
          profilePic: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCameraClick = () => {
    fileInputRef.current.click();
  };

  const currentProfilePic = userData.profilePic || marryDoeImg;

  return (
    <div className="screen-wrapper profile-screen">
      {/* Header bar */}
      <div className="profile-header" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <button className="back-btn" onClick={() => setScreen('welcome')} style={{ marginBottom: 0 }}>
          <svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
        </button>
        <h2>Account Settings</h2>
      </div>

      <div className="profile-content">
        {/* User Card */}
        <div className="profile-card animate-delay-1">
          <div className="profile-user-info">
            <div className="profile-avatar-container">
              <img 
                src={currentProfilePic} 
                alt={userData.name} 
                className="profile-avatar" 
              />
              <div 
                className="profile-camera-badge" 
                title="Change Avatar"
                onClick={handleCameraClick}
                style={{ cursor: 'pointer' }}
              >
                <svg viewBox="0 0 24 24">
                  <path d="M4 4h3l2-2h6l2 2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm8 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                </svg>
              </div>
              <input 
                type="file" 
                accept="image/*" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                style={{ display: 'none' }} 
              />
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
        <div className="profile-bottom-canvas animate-delay-2">
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
