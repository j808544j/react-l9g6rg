import React from 'react';
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';

import './style.css';

export default function App() {
  const firebaseConfig = {
    apiKey: 'AIzaSyARIwQN-IrE8Iy1aFma3wni17G_KC8VIw8',
    authDomain: 'notifications-3656b.firebaseapp.com',
    projectId: 'notifications-3656b',
    storageBucket: 'notifications-3656b.appspot.com',
    messagingSenderId: '1036409388519',
    appId: '1:1036409388519:web:b7c83ce284cf7d207f9142',
    measurementId: 'G-XYDVQW8H3W',
  };

  const app = initializeApp(firebaseConfig);
  const messaging = getMessaging(app);

  getToken(messaging, {
    vapidKey:
      'BHDZ_d4RAqPAQ-eCjg1VMEHnldBvajnLcSpnxbiFL1Jzcz-B8_nuqkmjxuVRcDqoOZgcKkE5SaYQPTQkVLgHN1U',
  })
    .then((currentToken) => {
      if (currentToken) {
        // Send the token to your server and update the UI if necessary
        // ...
        console.log('token', currentToken);
      } else {
        // Show permission request UI
        console.log(
          'No registration token available. Request permission to generate one.'
        );
        // ...
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // ...
    });

  return <div></div>;
}
