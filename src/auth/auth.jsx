import React, { useState, useEffect } from 'react';
import { useLocation  } from 'react-router-dom';  
import { isAuthenticated } from './handleJwt.js';
import Login from './login.jsx';
import Register from './register.jsx';

const Auth = ({ PageAuthenticated, urlRegister, urlLogin,}) => {
  const [location, setLocation] = useLocation();  

  const [loading, setLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      const userIsAuthenticated = await isAuthenticated();
      if (userIsAuthenticated) {
        setLocation(`/${PageAuthenticated}`);
      }
  
      setLoading(false);
    };
  
    checkAuthStatus();
  }, [PageAuthenticated]); 
  

  const handleLoginSuccess = () => {
    setLocation(`/${PageAuthenticated}`);
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
