import React, { useState } from 'react';
import Login from './Login';
import AuditForm from './AuditForm';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        <AuditForm />
      )}
    </div>
  );
};

export default App;
