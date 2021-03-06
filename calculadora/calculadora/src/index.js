import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculadora from './Calculadora';
import reportWebVitals from './reportWebVitals';
//import do bootstrap que foi instalado (node_modules)
import 'bootstrap/dist/css/bootstrap.min.css'

//enviando componente <Calculadora /> para index.html
ReactDOM.render(
  <React.StrictMode>
    <Calculadora />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
