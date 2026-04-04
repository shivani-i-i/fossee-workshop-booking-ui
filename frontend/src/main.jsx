/**
 * main
 * Bootstraps the React application into the root DOM node.
 * Keeps startup minimal so the app loads quickly and predictably.
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
