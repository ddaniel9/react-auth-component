"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveAuthToken = exports.isAuthenticated = exports.getAuthToken = exports.clearAuthToken = void 0;
var AUTH_TOKEN_KEY = 'authToken';

// Funzione per salvare il token in localStorage
var saveAuthToken = exports.saveAuthToken = function saveAuthToken(token) {
  return new Promise(function (resolve, reject) {
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
var getAuthToken = exports.getAuthToken = function getAuthToken() {
  return new Promise(function (resolve, reject) {
    try {
      var token = localStorage.getItem(AUTH_TOKEN_KEY);
      resolve(token);
    } catch (error) {
      console.error('Errore durante il recupero del token:', error);
      reject(error);
    }
  });
};

// Funzione per rimuovere il token da localStorage
var clearAuthToken = exports.clearAuthToken = function clearAuthToken() {
  return new Promise(function (resolve, reject) {
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
var isAuthenticated = exports.isAuthenticated = function isAuthenticated() {
  return new Promise(function (resolve, reject) {
    try {
      var authToken = localStorage.getItem(AUTH_TOKEN_KEY);
      resolve(authToken !== null);
    } catch (error) {
      console.error('Errore durante la verifica dello stato di autenticazione:', error);
      reject(error);
    }
  });
};