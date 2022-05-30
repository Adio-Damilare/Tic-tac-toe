import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import"../node_modules/bootstrap/dist/css/bootstrap.css"
import"../node_modules/bootstrap/dist/css/bootstrap-grid.css"
import"../node_modules/bootstrap/js/dist/modal.js"
import"../node_modules/bootstrap/js/src/modal.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



reportWebVitals();
