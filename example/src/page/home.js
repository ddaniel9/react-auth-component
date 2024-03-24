// Home.js
import React from 'react';
import { useHistory } from 'react-router-dom';
import {clearAuthToken} from 'react-auth-component';

const Home = () => {
  const history = useHistory();  
  
  const logOut = () =>{
    clearAuthToken();
    history.push("/");
   
  }

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={logOut}>logOut</button>
      {/* Aggiungi il contenuto della Home Page */}
    </div>
  );
};

export default Home;
