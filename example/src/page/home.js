// Home.js
import React from 'react';
import { useLocation  } from 'wouter';
import {clearAuthToken} from 'react-auth-component';

const Home = () => {
  const [location, setLocation] = useLocation();  // Ottieni la posizione corrente per la navigazione

  const logOut = () =>{
    clearAuthToken();
      setLocation("/");
   
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
