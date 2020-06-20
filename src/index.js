import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyButvG7ommCA3UuU00aGGecXFt6uqYxKIk",
    authDomain: "cart-101.firebaseapp.com",
    databaseURL: "https://cart-101.firebaseio.com",
    projectId: "cart-101",
    storageBucket: "cart-101.appspot.com",
    messagingSenderId: "702022817184",
    appId: "1:702022817184:web:f2dc8bfa8d9d130ce700c5",
    measurementId: "G-MQ27ZNZWBY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

ReactDOM.render(<App />, document.getElementById('root'));

