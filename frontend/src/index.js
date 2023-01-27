import React from 'react';
import ReactDOM from 'react-dom/client'; //biblioteca necessária para manipulação de objts no react
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

