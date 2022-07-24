import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <div>
  <h1 className="headingStyle">Todo App</h1>
  <div className="card">
    <h3 className="cardTitle">Card Title</h3>
    <p className="cardDescription"> Card Description.Card DescriptionCard Description.</p> 
    <h3 className="cardFooter">Card Footer</h3>
  </div>
  <div className="card">
    <h3 className="cardTitle">Card Title</h3>
    <p className="cardDescription"> Card Description.Card DescriptionCard Description.</p> 
    <h3 className="cardFooter">Card Footer</h3>
  </div>
  <div className="card">
    <h3 className="cardTitle">Card Title</h3>
    <p className="cardDescription"> Card Description.Card DescriptionCard Description.</p> 
    <h3 className="cardFooter">Card Footer</h3>
  </div>
  <div className="card">
    <h3 className="cardTitle">Card Title</h3>
    <p className="cardDescription"> Card Description.Card DescriptionCard Description.</p> 
    <h3 className="cardFooter">Card Footer</h3>
  </div>
  <div className="card">
    <h3 className="cardTitle">Card Title</h3>
    <p className="cardDescription"> Card Description.Card DescriptionCard Description.</p> 
    <h3 className="cardFooter">Card Footer</h3>
  </div>
  <div className="card">
    <h3 className="cardTitle">Card Title</h3>
    <p className="cardDescription"> Card Description.Card DescriptionCard Description.</p> 
    <h3 className="cardFooter">Card Footer</h3>
  </div>
  </div>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
