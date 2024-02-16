const AUTH_TOKEN_KEY = 'authToken';

// Funzione per salvare il token in localStorage
export const saveAuthToken = (token) => {
  return new Promise((resolve, reject) => {
    try {
      localStorage.setItem(AUTH_TOKEN_KEY, token);
      resolve();
    } catch (error) {
      console.error('Errore durante il salvataggio del token:', error);
      reject(error);
    }
  });
};

// Funzione per ottenere il token da localStorage
export const getAuthToken = () => {
  return new Promise((resolve, reject) => {
    try {
      const token = localStorage.getItem(AUTH_TOKEN_KEY);
      resolve(token);
    } catch (error) {
      console.error('Errore durante il recupero del token:', error);
      reject(error);
    }
  });
};

// Funzione per rimuovere il token da localStorage
export const clearAuthToken = () => {
  return new Promise((resolve, reject) => {
    try {
      localStorage.removeItem(AUTH_TOKEN_KEY);
      resolve();
    } catch (error) {
      console.error('Errore durante la rimozione del token:', error);
      reject(error);
    }
  });
};

// Funzione per verificare lo stato di autenticazione
export const isAuthenticated = () => {
  return new Promise((resolve, reject) => {
    try {
      const authToken = localStorage.getItem(AUTH_TOKEN_KEY);
      resolve(authToken !== null);
    } catch (error) {
      console.error('Errore durante la verifica dello stato di autenticazione:', error);
      reject(error);
    }
  });
};
