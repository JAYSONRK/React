import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Excersize 1
ReactDOM.render(<>
  <h1>JAYSON TOP NETFLIX SHOWS</h1>
  <p>My top 5 picks are:</p>
  <ol>
    <li>Friends</li>
    <li>Viking</li>
    <li>Two & Half Men</li>
    <li>Sex Education</li>
    <li>Rick & Morty</li>
  </ol>
</>, document.getElementById('root'))


// // Excersize 2
ReactDOM.render(<>
<h1>Hello, My name is JAYSON</h1>
<p>Todays date is {new Date().toLocaleDateString()} </p>
<p>Time right now is {new Date().toLocaleTimeString()} </p>
</>, document.getElementById('root'))

// // Excersize 3
const body ={
  backgroundColor: '#9ad39b',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: '100vw',
  minHeight: '100vh'
}
const card = {
  backgroundColor: '#f2ff6f',
  padding: '0.3rem 1rem',
  borderRadius: '1rem'
}
const heading = {
  color: '#ff6b47',
}

const curHr = new Date().getHours();
let wish = '';
const cssStyle = {};
if (curHr >= 1 && curHr < 12) {
  wish = 'Good Morning';
  cssStyle.color ='green' 
} else if (curHr >= 12 && curHr < 19) {
  wish = 'Good Afternoon';
  cssStyle.color ='orange'
} else {
  wish = 'Good Night';
  cssStyle.color ='black'
}

ReactDOM.render(<>
<body style={body}>
  <div class="container">
    <div style={card}>
      <h1 style={heading}>Hello sir,<span style={cssStyle}>{wish}</span></h1>
    </div>
  </div> 
</body> 
</>, document.getElementById('root'));

// Excersize 4
ReactDOM.render(<App/>,document.getElementById('root'))