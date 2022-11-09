import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter } from "react-router-dom";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmWNW1fhUfHow0YEdjQYSruwB0ezVHxwY",
  authDomain: "fakebook-aa508.firebaseapp.com",
  projectId: "fakebook-aa508",
  storageBucket: "fakebook-aa508.appspot.com",
  messagingSenderId: "244820371349",
  appId: "1:244820371349:web:e67ec0ec9c0c938966789c",
  measurementId: "G-VJVP53Z1PM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);