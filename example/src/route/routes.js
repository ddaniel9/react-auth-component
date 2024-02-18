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
            urlRegister="http://example.com/api/auth/register"
            urlLogin="http://example.com/api/auth/login"
          />
        )}
      />

    </>
  );
};

export default AppRoutes;
