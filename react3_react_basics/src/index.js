import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// div method , common method
ReactDOM.render(<div>
<h1>Hello World</h1>
<p>How are You?</p>
</div>,document.getElementById('root'));

// for above 16 version, bracket method
ReactDOM.render([<h1>Hello World</h1>,<p>How are You?</p>]
,document.getElementById('root'));

// React Fragment
ReactDOM.render(<React.Fragment>
  <h1>Hello World</h1>
  <p>How are You?</p>
  </React.Fragment>,document.getElementById('root'));

// React Fragment(syntaxtic sugar)
ReactDOM.render(<>
  <h1>Hello World</h1>
  <p>How are You?</p>
  </>,document.getElementById('root'));


// JSX Expression {}
const name = 'Jayson';
ReactDOM.render(<>
  <h1 >My name is {name}</h1>
  <p>Iam {2023-1995}years old</p>
</>,document.getElementById('root'));


// Template literals
const fname = 'Jayson';
const lname ='Kennedy'
ReactDOM.render(<>
  <h1>My name is {fname} {lname}</h1> 
  <p>My name is {fname + " " + lname}</p>
  <p>My name is {`${fname} ${lname}`}</p>
</>,document.getElementById('root'));


//JSX attributes, className
const img2 = "https://picsum.photos/seed/picsum/200/300";
const img3 = "https://picsum.photos/id/237/200/300";
const link = "https://picsum.photos/";
ReactDOM.render(<>
<h1 className="heading" contentEditable="true">TODAYS IMAGES</h1>
<div className='image'>
<img src="https://picsum.photos/200/300" alt="beach"/>
<img src={img2} alt="image2"/>
<a href= {link} target="_blank"><img src={img3} alt="image3"/></a>
</div>
</>, document.getElementById('root'))

//Inline CSS styling
const img4 = "https://picsum.photos/seed/picsum/200/300";
const img5 = "https://picsum.photos/id/237/200/300";
const link1 = "https://picsum.photos/";

const heading = {
  color: '#fa9191',
  textAlign: 'center',
  fontWeight: 'bold',
  textShadow: '0 2px 4px #fa9191',
  margin: '2rem',
  fontFamily: 'Agbalumo, sans-serif',
  fontSize: '3rem',
}

const image = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '3.5rem 0',
}

ReactDOM.render(<>
{/* Raw method */}
<h1  style={{
  color: '#fa9191',
  textAlign: 'center',
  fontWeight: 'bold',
  textShadow: '0 2px 4px #fa9191',
  margin: '2rem',
  fontFamily: 'Agbalumo, sans-serif',
  fontSize: '3rem',
}}>TODAYS IMAGES</h1>
{/* Useful method */}
<h3 style={heading}>MY images</h3>

<div style={image}>
<img src="https://picsum.photos/200/300" alt="beach"/>
<img src={img4} alt="image2"/>
<a href= {link1} target="_blank"><img src={img5} alt="image3"/></a>
</div>
</>, document.getElementById('root'))
