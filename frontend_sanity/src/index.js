import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider
      clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
    >
      <Router>
        <App />
      </Router>
    </GoogleOAuthProvider>
  </React.StrictMode>,
);


