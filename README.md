# react-auth-component

> react-auth-component

[![NPM](https://img.shields.io/npm/v/react-auth-component.svg)](https://www.npmjs.com/package/react-auth-component) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-auth-component
```

## Usage
//This is a simple manager of login & registration with JWT json web token, is good to use if you want to create a login very fast just to start your application.
//IMPORTANT!:
in the Example behind the api rest the you are calling expect a Json with field called 'jwt', if you have a different name put in : tokenName="yournameTokenJson"
{
    "jwt": "eyJhbGcinometokencasualJH6omU",
    "id": 12,
}
```jsx
import React, { Component } from 'react'
import { Route, Link, Routes } from 'react-router-dom'; 
import Home from '../page/home';
import About from '../page/notFound';
import { Auth } from 'react-auth-component'
import 'react-auth-component/dist/index.css'

class Example extends Component {
  render() {
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
              urlRegister="http://example.com/api/auth/register"
              urlLogin="http://example.com/api/auth/login"
              tokenName="jwt"
            />
          }
        />
      </Routes>
    </>
  }
}

const App = () => {
  return (
    <Router>
      <Example />
    </Router>
  );
};

```




## License

MIT © [ddaniel9](https://github.com/ddaniel9)
