import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const headingStyle= {
//   backgroundColor: "purple",
//   color:"white",
//   padding:"15px",
//   textAlign:'center',
// }

root.render(
  <div>
  <h1 className="headingStyle">Todo App</h1>
  <h3>todo title</h3>
  <p>todo desc</p>
  </div>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
