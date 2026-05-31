import React, { useState } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Profile from './components/Profile';

const DEFAULT_USER = {
  name: 'Marry Doe',
  email: 'Marry@Gmail.Com',
  phone: '+1 (555) 019-2834',
  company: 'PopX Agency',
  isAgency: 'Yes',
  profilePic: null
};

function App() {
  const [screen, setScreen] = useState('welcome');
  const [userData, setUserData] = useState(DEFAULT_USER);

  const resetUserData = () => {
    setUserData(DEFAULT_USER);
  };

  const renderScreen = () => {
    switch (screen) {
      case 'welcome':
        return <Welcome setScreen={setScreen} />;
      case 'signin':
        return <Signin setScreen={setScreen} userData={userData} setUserData={setUserData} />;
      case 'signup':
        return <Signup setScreen={setScreen} userData={userData} setUserData={setUserData} />;
      case 'profile':
        return <Profile setScreen={setScreen} userData={userData} setUserData={setUserData} resetUserData={resetUserData} />;
      default:
        return <Welcome setScreen={setScreen} />;
    }
  };

  return (
    <>
      {/* Centered Mobile Device Mockup */}
      <div className="device-container">
        <div className="device-notch"></div>
        <div className="app-viewport">
          {renderScreen()}
        </div>
      </div>


    </>
  );
}

export default App;
