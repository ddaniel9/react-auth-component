// routes.js
import React from 'react';
import { Route, Link } from 'wouter';
import {Auth} from 'react-auth-component';
import "react-auth-component/dist/index.css"
import Home from '../page/home';
import About from '../page/notFound';

const AppRoutes = () => {
  return (
    <>
      <nav>
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/">Login</Link>
      </nav>

      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route
        path="/"
        component={() => (
          <Auth
            PageAuthenticated="home"
            urlRegister="http://192.168.1.2:8086/api/auth/register"
            urlLogin="http://192.168.1.2:8086/api/auth/login"
          />
        )}
      />

    </>
  );
};

export default AppRoutes;
