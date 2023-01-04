import React from 'react'; // packages 
import ReactDOM from 'react-dom/client'; // react virtual dom
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); // root select 
// jsx , App ,
root.render(
  <React.StrictMode>   
    <App />
  </React.StrictMode>
);

reportWebVitals();
