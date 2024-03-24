import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { isAuthenticated } from './handleJwt.js';
import Login from './login.jsx';
import Register from './register.jsx';

const Auth = ({ PageAuthenticated, urlRegister, urlLogin,}) => {
  const history = useHistory();  

  const [loading, setLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      const userIsAuthenticated = await isAuthenticated();
      if (userIsAuthenticated) {
        history.push(`/${PageAuthenticated}`);
      }
  
      setLoading(false);
    };
  
    checkAuthStatus();
  }, [PageAuthenticated]); 
  

  const handleLoginSuccess = () => {
    history.push(`/${PageAuthenticated}`);
  };

  const handleToggleLogin = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };

  return (
    
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {isLogin ? (
            <Login 
              onLoginSuccess={handleLoginSuccess} 
              toggleLogin={handleToggleLogin} 
              urlLogin={urlLogin}
            />
          ) : (
            <Register 
              onRegisterSuccess={handleLoginSuccess} 
              urlRegister={urlRegister}
              urlLogin={urlLogin}
              toggleLogin={handleToggleLogin} 
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Auth;
