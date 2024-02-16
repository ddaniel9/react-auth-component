// src/index.js
import Auth from './auth/auth.jsx';
export { Auth };
// export { default as Auth } from './auth/auth';
// export {  NestedRoutes } from './auth/auth';
// export { default as Login } from './auth/login.jsx';
// // src/index.js
export { isAuthenticated } from './auth/handleJwt.js';
// export { default as Button } from './component/button.jsx';


import React, {useState} from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  const [isLogin, setIsLogin] = useState(true);
  return <div className={styles.test}>Example Component: {text}</div>
}
