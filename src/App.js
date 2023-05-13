import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <DashboardPage />
      )}
    </div>
  );
};

export default App;
