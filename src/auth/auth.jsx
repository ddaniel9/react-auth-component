import React, { useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import { isAuthenticated } from './handleJwt.js';
import Login from './login.jsx';
import Register from './register.jsx';

const Auth = ({ PageAuthenticated, urlRegister, urlLogin, tokenServerName}) => {
  const navigate = useNavigate();  

  const [loading, setLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      const userIsAuthenticated = await isAuthenticated();
      if (userIsAuthenticated) {
        navigate(`/${PageAuthenticated}`);
      }
  
      setLoading(false);
    };
  
    checkAuthStatus();
  }, [PageAuthenticated]); 
  

  const handleLoginSuccess = () => {
    navigate(`/${PageAuthenticated}`);
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
              tokenName={tokenServerName?tokenServerName:'jwt'}
            />
          ) : (
            <Register 
              onRegisterSuccess={handleLoginSuccess} 
              urlRegister={urlRegister}
              urlLogin={urlLogin}
              toggleLogin={handleToggleLogin} 
              tokenName={tokenServerName?tokenServerName:'jwt'} 
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Auth;
