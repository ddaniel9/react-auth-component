import React, { useState } from 'react';
import axios from 'axios';
import { saveAuthToken } from './handleJwt.js';
import stylesLogin from './login.css';

const Login = ({ urlLogin, onLoginSuccess, toggleLogin, tokenName }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      
      if (!email.trim() || !password.trim()) {
        alert('Error: Email and password are required');
        return;
      }

      setLoading(true);

      const response = await axios.post(
        urlLogin,
        {
          username: email,
          password: password,
        }
      );


      if (response.data) {
        await saveAuthToken(response.data,tokenName);
        onLoginSuccess();
        setEmail('');
        setPassword('');
      } else {
        alert('Error: Invalid credentials');
      }
    } catch (error) {
      console.error(error);
      alert('Error: An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={stylesLogin.loginContainer}> 
    <div className={stylesLogin.loginForm}> 
      <div className={stylesLogin.formGroup}>
        <label>Email Address:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
        />
      </div>
      <div className={stylesLogin.formGroup}>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className={stylesLogin.formActions}>
          <button className={stylesLogin.buttonLogin} onClick={handleLogin}>Log in!</button>
          <button className={stylesLogin.buttonLogin} onClick={toggleLogin}>Switch to Register</button>
        </div>
      )}
    </div>
  </div>
  );
};

export default Login;
