import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { jsx as _jsx } from "react/jsx-runtime";

// // React
ReactDOM.render(<h1>Hello World!</h1>, document.getElementById('root'));

// Babel compiler
ReactDOM.render( /*#__PURE__*/_jsx("h1", {
  children: "Hello World!"
}), document.getElementById('root'));

// Pure js
var h1 = document.createElement('h1')
let root = document.getElementById('root');
h1.innerHTML = 'Hello World!';
root.appendChild(h1);