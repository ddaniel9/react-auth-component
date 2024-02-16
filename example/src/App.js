import React from 'react'

import { Auth } from 'react-auth-component'
import 'react-auth-component/dist/index.css'

const App = () => {
  // return <ExampleComponent text="Create React Library Example 😄" />
  return  <Auth
  PageAuthenticated="home"
  urlRegister="http://192.168.1.6:8086/api/auth/register"
  urlLogin="http://192.168.1.6:8086/api/auth/login"
/>
}

export default App
