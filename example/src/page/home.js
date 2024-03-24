// Home.js
import React from 'react';
import { useNavigate  } from 'react-router-dom';
import {clearAuthToken} from 'react-auth-component';

const Home = () => {
  const navigate = useNavigate(); 

  const logOut = () =>{
    clearAuthToken();
    navigate("/");
   
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
