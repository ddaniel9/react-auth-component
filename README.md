# react-auth-component

> react-auth-component

[![NPM](https://img.shields.io/npm/v/react-auth-component.svg)](https://www.npmjs.com/package/react-auth-component) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-auth-component
```

## Usage
//This is a simple manager of login & registration with JWT json web token, is good to use if you want to create a login very fast just to start your application.
//IMPORTANT!:  the api rest the you are calling expect a Json with field called 'jwt' 
```jsx
import React, { Component } from 'react'

import Auth from 'react-auth-component'
import 'react-auth-component/dist/index.css'

class Example extends Component {
  render() {
 <Router>
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
 </Router>
  }
}
```

## License

MIT © [ddaniel9](https://github.com/ddaniel9)
