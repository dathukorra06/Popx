import React from 'react';

export default function Welcome({ setScreen }) {
  return (
    <div className="screen-wrapper welcome-screen">
      <div className="welcome-content animate-delay-1">
        <h1 className="welcome-title">Welcome to PopX</h1>
        <p className="welcome-desc">
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit,
        </p>
      </div>
      <div className="welcome-actions animate-delay-2">
        <button 
          className="btn-primary" 
          onClick={() => setScreen('signup')}
        >
          Create Account
        </button>
        <button 
          className="btn-secondary" 
          onClick={() => setScreen('signin')}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}
