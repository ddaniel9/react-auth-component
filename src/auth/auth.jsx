import React, { useState, useEffect } from 'react';
import { useLocation  } from 'wouter';  // Importa hook wouter per la navigazione
import { isAuthenticated } from './handleJwt.js';
import Login from './login.jsx';
import Register from './register.jsx';

const Auth = ({ PageAuthenticated, urlRegister, urlLogin,
    // loading, setLoading,
    // isLogin, setIsLogin,location, setLocation
}) => {
  const [location, setLocation] = useLocation();  // Ottieni la posizione corrente per la navigazione

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
