import React, { useState } from 'react';
import axios from 'axios';
import { saveAuthToken } from './handleJwt.js';
import stylesLogin from './login.css';

const Login = ({ urlLogin, onLoginSuccess, toggleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      // Validazione dei campi
      if (!email.trim() || !password.trim()) {
        alert('Error: Email and password are required');
        return;
      }

      setLoading(true);

      // Chiamata all'API con Axios e l'URL dinamico
      const response = await axios.post(
        urlLogin,
        {
          username: email,
          password: password,
        }
      );

      console.log(response.data.jwt);

      if (response.data.jwt) {
        // Salva il token, gestisci il login e resetta lo stato
        await saveAuthToken(response.data.jwt);
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
    <div className={stylesLogin.loginContainer}> {/* Aggiunto un wrapper con classe per centrare il contenuto */}
    <div className={stylesLogin.loginForm}> {/* Aggiunto un wrapper per il form */}
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
          <button onClick={handleLogin}>Log in!</button>
          <button onClick={toggleLogin}>Switch to Register</button>
        </div>
      )}
    </div>
  </div>
  );
};

export default Login;
