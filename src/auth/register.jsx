import React, { useState } from 'react';
import axios from 'axios';
import { saveAuthToken } from './handleJwt.js';
import stylesLogin from './login.css';


const Register = ({ urlLogin, urlRegister, onRegisterSuccess, toggleLogin }) => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    password_confirmation: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const registerUser = async () => {
    const { email, password, password_confirmation } = userData;

    try {
      
      if (!email || !password || !password_confirmation) {
        setError('Please fill in all the fields');
        return;
      }
      setLoading(true);

      const response = await axios.post(
        urlRegister,
        {
          email,
          password,
          username: email,
          roles: [...["ROLE_USER"]],
        }
      );

      console.log(response);

      const authResponse = await axios.post(
        urlLogin,
        {
          password,
          username: email,
        }
      );

      console.log(authResponse.data.jwt);

      if (authResponse.data.jwt) {
        await saveAuthToken(response.data.jwt);
        onRegisterSuccess();
        setUserData({
          email: '',
          password: '',
          password_confirmation: '',
        });
      } else {
        setError('Registration Failed');
      }
    } catch (error) {
      console.error(error);
      setError('Registration Failed');
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
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            placeholder="Email Address"
          />
        </div>
        <div className={stylesLogin.formGroup}>
          <label>Password:</label>
          <input
            type="password"
            value={userData.password}
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
            placeholder="Password"
          />
        </div>
        <div className={stylesLogin.formGroup}>
          <label>Password Confirm:</label>
          <input
            type="password"
            value={userData.password_confirmation}
            onChange={(e) => setUserData({ ...userData, password_confirmation: e.target.value })}
            placeholder="Password Confirm"
          />
        </div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className={stylesLogin.formActions}>
            <button className={stylesLogin.buttonLogin} onClick={registerUser}>Sign In</button>
            <button className={stylesLogin.buttonLogin} onClick={toggleLogin}>Switch to Login</button>
          </div>
        )}
        <p style={{ color: 'red' }}>{error}</p>
      </div>
    </div>
  );
};

export default Register;
