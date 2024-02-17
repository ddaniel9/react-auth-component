// App.js
import React from 'react';
import { Router } from 'wouter';
import AppRoutes from './route/routes';

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
