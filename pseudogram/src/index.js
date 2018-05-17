import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp({
    apiKey: "AIzaSyCQYhcGWnS7MOkCCAlDdF88eokY4KXE_b8",
    authDomain: "pseudogram-b210c.firebaseapp.com",
    databaseURL: "https://pseudogram-b210c.firebaseio.com",
    projectId: "pseudogram-b210c",
    storageBucket: "pseudogram-b210c.appspot.com",
    messagingSenderId: "827673516991"
});

ReactDOM.render(<App />, 
    document.getElementById('root'));
registerServiceWorker();
