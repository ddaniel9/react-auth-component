// routes.js
import React from 'react';
import { Route, Link, Routes } from 'react-router-dom'; // Importa Route e Link da react-router-dom
import Home from '../page/home';
import About from '../page/notFound';
import { Auth } from 'react-auth-component'; // Importa il componente AuthComponent da react-auth-component
import "react-auth-component/dist/index.css";

const AppRoutes = () => {
  return (
    <>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/">Login</Link>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          exact
          path="/"
          element={
            <Auth
              PageAuthenticated="home"
              urlRegister="http://192.168.1.10:8080/api/auth/register"
              urlLogin="http://192.168.1.10:8080/api/auth/login"
              tokenName="jwt"
            />
          }
        />
      </Routes>
    </>
  );
};

export default AppRoutes;
