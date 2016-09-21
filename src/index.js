import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import firebaseConfig from '../firebase_config.json';
import firebase from 'firebase/app';
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
